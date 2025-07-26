import React from "react";
import { Metadata } from "next";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioClientWrapper from "@/components/portfolio/PortfolioClientWrapper";
import { categories, artworks } from "@/data/artwork";

export const metadata: Metadata = {
  title: "Portfolio | Asiya Kinebrew",
  description:
    "Explore the creative journey of Asiya Kinebrew's artwork across different categories and skill levels.",
};

interface GalleryPageProps {
  onBack?: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800">
      <PortfolioHeader />
      <PortfolioClientWrapper
        artworks={artworks}
        categories={categories}
        onBack={onBack}
      />

      {/* The call-to-action section is currently commented out in the original code,
          but it could be extracted to another component if needed */}
    </div>
  );
};

export default GalleryPage;
