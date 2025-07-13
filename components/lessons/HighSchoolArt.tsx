"use client";

import { useState } from "react";
import MasonryGallery from "@/components/MasonryGallery";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HighSchoolSection {
  title: string;
  description: string;
  images: string[];
}

interface HighSchoolArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string, images?: string[], sectionTitle?: string) => void;
}

export default function HighSchoolArt({
  activeTab,
  openImageModal,
}: Readonly<HighSchoolArtProps>) {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  // High School art section data
  const highSchoolPortfolioSections: HighSchoolSection[] = [];

  const handleArtworkClick = (index: number) => {
    setSelectedArtwork(index);
  };

  const handleBackClick = () => {
    setSelectedArtwork(null);
  };

  const renderContent = () => {
    // If an artwork is selected, show the detail view
    if (selectedArtwork !== null) {
      const artwork = highSchoolPortfolioSections[selectedArtwork];
      return (
        <div className="animate-in fade-in duration-300">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="mb-6 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>

          {/* Artwork detail */}
          <div className="space-y-6">
            <div className="flex flex-col text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {artwork.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{artwork.description}</p>
            </div>

            {/* Image gallery using MasonryGallery */}
            <div className="mt-8">
             
              <MasonryGallery
                portfolioData={artwork.images.map((image, idx) => ({
                  id: idx,
                  title: `${artwork.title} - Image ${idx + 1}`,
                  category: "high-school-art",
                  image: image,
                }))}
              />
            </div>
          </div>
        </div>
      );
    }

    // Otherwise, show the grid view
    if (highSchoolPortfolioSections.length > 0) {
      return (
        <div className="animate-in fade-in duration-300">
          {/* <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Explore advanced artwork from high school art students. These pieces
              demonstrate developed skills and sophisticated artistic concepts.
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {highSchoolPortfolioSections.map((artwork, index) => (
              <button
                key={`highschool-art-${artwork.title}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 text-left w-full"
                onClick={() => handleArtworkClick(index)}
                aria-label={`View ${artwork.title} details`}
              >
                {/* Artwork preview image */}
                <div className="h-48 overflow-hidden relative group">
                  <img
                    src={artwork.images[0]}
                    alt={artwork.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium transition-opacity duration-300 px-3 py-1 bg-black bg-opacity-50 rounded-lg">
                      Click to Expand
                    </span>
                  </div>
                </div>

                {/* Artwork title */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {artwork.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {artwork.images.length} image{artwork.images.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // If no artwork is available
    return (
      <div className="text-center py-16 bg-pink-50 dark:bg-gray-800 rounded-lg border border-pink-200 dark:border-gray-700">
        <div className="max-w-md mx-auto">
          <FileText className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-200 mb-2">
            No Artworks Available
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            There are currently no artworks available for this category. Please check back
            later or select a different category.
          </p>
        </div>
      </div>
    );
  };

  // Only render when this tab is active
  if (activeTab !== "high-school") return null;

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md dark:shadow-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          High School Art
        </h2>
        {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Advanced students refine their skills, explore personal themes, and blend
          traditional and digital techniques.
        </p> */}
      </div>

      {renderContent()}
    </div>
  );
}
