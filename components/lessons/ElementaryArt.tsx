"use client";

import { useState } from "react";
import MasonryGallery from "@/components/MasonryGallery";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ElementaryArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string, images?: string[], sectionTitle?: string) => void;
}

export default function ElementaryArt({
  activeTab,
  openImageModal,
}: Readonly<ElementaryArtProps>) {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  const elementaryArtworks = [
    {
      title: "Paper Plate Mask",
      description:
        "Our second grade artists at Camp Art Academy had a blast transforming simple materials such as paper plates into wearable art! This project sparked their imagination while introducing key elements of mask-making and storytelling",
      images: ["/images/paper-mask-1.jpg", "/images/paper-mask-2.jpg"],
    },
    {
      title: "King Tut Pharaoh Mask",
      description:
        "Through paint, texture, and design, students explored ancient Egyptian art and brought history to life with their golden King Tut masks. A beautiful blend of creativity and cultural learning",
      images: [
        "/images/elementary-img-1.jpg",
        "/images/elementary-img-2.jpg",
        "/images/elementary-img-3.jpg",
        "/images/elementary-img-4.jpg",
      ],
    },
    {
      title: "Paper Puppets Art",
      description:
        "With imagination as their guide, students crafted unique paper puppets and brought them to life. These playful characters reflect each artist creativity",
      images: [
        "/images/paper-puppet-1.jpg",
        "/images/paper-puppet-2.jpg",
        "/images/paper-puppet-3.jpg",
        "/images/paper-puppet-4.jpg",
      ],
    },
    {
      title: "Sugar Skull Art",
      description:
        "Inspired by Día de los Muertos traditions, students used bold colors and textures to celebrate life and culture through their handcrafted sugar skulls. Each piece is full of personality and meaning.",
      images: [
        "/images/sugar-skull-1.jpg",
        "/images/sugar-skull-2.jpg",
        "/images/sugar-skull-3.jpg",
        "/images/sugar-skull-4.jpg",
        "/images/sugar-skull-5.jpg",
      ],
    },
    {
      title: "Basquiat-Inspired Street Art",
      description:
        "Channeling the expressive style of Jean-Michel Basquiat, students let loose with color, line, and emotion. These powerful portraits are testaments to fearless mark-making and individual expression",
      images: [
        "/images/crayon-and-acrylic-1.jpg",
        "/images/crayon-and-acrylic-2.jpg",
        "/images/crayon-and-acrylic-3.jpg",
      ],
    },
    {
      title: "Mini Robots Art",
      description:
        "Students engineered their own mini robot sculptures using recycled materials like cardboard, foil, and buttons. A hands-on fusion of art and STEM, these robots reflect both imagination and innovation.",
      images: [
        "/images/mini-robotic-1.jpg",
        "/images/mini-robotic-2.jpg",
        "/images/mini-robotic-3.jpg",
      ],
    },
    // {
    //   title: "Surrealist Inspired Art",
    //   description:
    //     "With scissors, glue, and big imaginations, students made surrealist collages that mix the real with the unreal. This project was all about seeing the world in a new and playful way.",
    //   images: ["/images/surrealist-art-1.png"],
    // },
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
      const artwork = elementaryArtworks[selectedArtwork];
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
                  title: ``,
                  category: "elementary-art",
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
            Explore student artwork from elementary art lessons. From painting to
            sculpture, these pieces highlight the creative foundations built in the early
            years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {elementaryArtworks.map((artwork, index) => (
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
  if (activeTab !== "elementary") return null;

  return renderContent();
}
