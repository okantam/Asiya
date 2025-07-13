"use client";

import { useState } from "react";
import MasonryGallery from "@/components/MasonryGallery";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JuniorArtSection {
  title: string;
  description: string;
  images: string[];
}

interface JuniorArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string, images?: string[], sectionTitle?: string) => void;
}

export default function JuniorArt({
  activeTab,
  openImageModal,
}: Readonly<JuniorArtProps>) {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  // Junior art section data
  const juniorArtworks: JuniorArtSection[] = [
    {
      title: "Tee Shirt Design",
      description:
        "Students experiment with various materials and textures to create unique and personal t-shirt designs. This project encourages self-expression through fashion.",
      images: ["/images/junior-img-2.jpg", "/images/junior-img-1.avif"],
    },
  ];

  const handleArtworkClick = (index: number) => {
    setSelectedArtwork(index);
  };

  const handleBackClick = () => {
    setSelectedArtwork(null);
  };

  const renderContent = () => {
    // If an artwork is selected, show the detail view
    if (selectedArtwork !== null) {
      const artwork = juniorArtworks[selectedArtwork];
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
            <div className="flex flex-col items-center">
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
                  title: ``,
                  category: "junior-art",
                  image: image,
                }))}
              />
            </div>
          </div>
        </div>
      );
    }

    // Otherwise, show the grid view
    return (
      <div className="animate-in fade-in duration-300">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 py-3 text-center max-w-3xl mx-auto">
            Explore student artwork from middle school art lessons. These pieces showcase
            growing artistic skills and creative expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {juniorArtworks.map((artwork, index) => (
            <button
              key={artwork.title}
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
  };

  // Only render when this tab is active
  if (activeTab !== "junior") return null;

  return renderContent();
}
