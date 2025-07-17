"use client";
import React, { useState } from "react";
import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface ArtworkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  height?: number;
  description?: string;
}

interface MasonryGalleryProps {
  portfolioData: ArtworkItem[];
}

const MasonryGallery = ({ portfolioData }: MasonryGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const getLevelColor = (category: string) => {
    switch (category) {
      case "ceramics":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "photography":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "digital-art":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "2d-art":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "3d-art":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const nextImage = () => {
    console.log("Next image clicked");
    setSelectedImageIndex(prevIndex => {
      const newIndex = prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1;
      console.log("New index:", newIndex);
      return newIndex;
    });
  };

  const prevImage = () => {
    console.log("Previous image clicked");
    setSelectedImageIndex(prevIndex => {
      const newIndex = prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1;
      console.log("New index:", newIndex);
      return newIndex;
    });
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log("Key pressed:", e.key);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextImage();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevImage();
    }
  };

  return (
    // Alternative solution using CSS Grid with auto-fit rows:
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
      {portfolioData.map((artwork, index) => (
        <div
          key={artwork.id}
          className="break-inside-avoid bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 self-start"
        >
          <div className="overflow-hidden relative group">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="group-hover:brightness-50 w-full aspect-square bg-surface-200 dark:bg-surface-700 object-cover duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <Dialog
                open={dialogOpen && selectedImageIndex === index}
                onOpenChange={open => {
                  setDialogOpen(open);
                  if (open) setSelectedImageIndex(index);
                }}
              >
                <DialogTrigger asChild>
                  <button className="opacity-0 group-hover:opacity-100 duration-300 bg-white dark:bg-gray-800 bg-opacity-90 hover:bg-opacity-100 dark:bg-opacity-90 dark:hover:bg-opacity-100 rounded-full p-3 transform hover:scale-110 transition-transform">
                    <Eye className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none"
                  onKeyDown={handleKeyDown}
                >
                  <div className="relative">
                    <img
                      src={portfolioData[selectedImageIndex].image}
                      alt={portfolioData[selectedImageIndex].title || "Gallery image"}
                      className="w-full min-h-52 object-cover rounded-lg"
                    />

                    {/* Navigation buttons */}
                    <button
                      onClick={prevImage}
                      type="button"
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all z-20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </button>

                    <button
                      onClick={nextImage}
                      type="button"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all z-20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </button>

                    <DialogClose asChild>
                      <button className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-1 text-white z-30">
                        <X className="h-6 w-6" />
                      </button>
                    </DialogClose>

                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
                      <h3 className="text-xl font-bold">
                        {portfolioData[selectedImageIndex].title}
                      </h3>
                      {portfolioData[selectedImageIndex].description && (
                        <p className="text-sm text-white/80 mt-1">
                          {portfolioData[selectedImageIndex].description}
                        </p>
                      )}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getLevelColor(
                          portfolioData[selectedImageIndex].category
                        )}`}
                      >
                        {portfolioData[selectedImageIndex].category}
                      </span>

                      {/* Image counter */}
                      <div className="absolute bottom-4 right-4 text-white/80 text-sm">
                        {selectedImageIndex + 1} / {portfolioData.length}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {artwork.title}
            </h3>
            {artwork.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                {artwork.description}
              </p>
            )}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                artwork.category
              )}`}
            >
              {artwork.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
