"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  sectionTitle: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  autoSlide: boolean;
  setAutoSlide: (autoSlide: boolean) => void;
  onImageClick: (imageSrc: string, images?: string[], sectionTitle?: string) => void;
  activeTab: string;
  tabId: string;
  sectionIndex: number;
}

export default function ImageCarousel({
  images,
  sectionTitle,
  currentIndex,
  setCurrentIndex,
  autoSlide,
  setAutoSlide,
  onImageClick,
  activeTab,
  tabId,
}: ImageCarouselProps) {
  const AUTO_SLIDE_RESUME_DELAY = 10000;

  // Next image function
  const nextImage = () => {
    if (images.length <= 1) return;
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    pauseAutoSlide();
  };

  // Previous image function
  const prevImage = () => {
    if (images.length <= 1) return;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    pauseAutoSlide();
  };

  // Direct navigation to specific image
  const goToImage = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
    pauseAutoSlide();
  };

  // Pause auto-slide temporarily when manually changing images
  const pauseAutoSlide = () => {
    if (autoSlide) {
      setAutoSlide(false);

      // Resume auto-slide after delay
      setTimeout(() => {
        if (activeTab === tabId) {
          setAutoSlide(true);
        }
      }, AUTO_SLIDE_RESUME_DELAY);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {images.length > 0 ? (
        <>
          <button
            className="bg-pink-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer w-full border-0 p-0 relative"
            onClick={() => onImageClick(images[currentIndex], images, sectionTitle)}
            aria-label={`Enlarge ${sectionTitle} artwork`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${sectionTitle} artwork ${currentIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/5 hover:bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full text-sm font-medium dark:text-gray-200">
                    <Eye className="inline h-4 w-4 mr-1" /> View
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-50 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-gray-600 shadow-lg dark:border-gray-600"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6 dark:text-gray-200" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-50 dark:bg-gray-700 hover:bg-pink-100 dark:hover:bg-gray-600 shadow-lg dark:border-gray-600"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6 dark:text-gray-200" />
              </Button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((img, imgIndex) => (
                <button
                  key={`dot-${sectionTitle}-${imgIndex}`}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    imgIndex === currentIndex
                      ? "bg-coral-600 dark:bg-coral-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => goToImage(imgIndex)}
                  aria-label={`View image ${imgIndex + 1}`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 bg-pink-50 dark:bg-gray-800 rounded-lg">
          <p className="dark:text-gray-300">No images available for this section.</p>
        </div>
      )}
    </div>
  );
}
