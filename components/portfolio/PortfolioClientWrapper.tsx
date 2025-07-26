"use client";
import React, { useState } from "react";
import MasonryGallery from "@/components/MasonryGallery";
import CategoryFilter from "./CategoryFilter";
import { ArtworkItem } from "@/types/artwork";

interface PortfolioClientWrapperProps {
  artworks: ArtworkItem[];
  categories: { id: string; name: string }[];
  onBack?: () => void;
}

const PortfolioClientWrapper: React.FC<PortfolioClientWrapperProps> = ({
  artworks,
  categories,
  onBack,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id || "photography"
  );

  const filteredArtworks = artworks.filter(
    artwork => artwork.category === selectedCategory
  );

  return (
    <>
      {/* Filter Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-coffee/70 dark:text-gray-400 text-lg">
                  No artwork found for the selected category.
                </p>
              </div>
            ) : (
              <MasonryGallery portfolioData={filteredArtworks} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioClientWrapper;
