"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  modalOpen: boolean;
  closeImageModal: () => void;
  selectedImage: string | null;
  allImages?: string[];
  sectionTitle?: string;
}

export default function ImageModal({
  modalOpen,
  closeImageModal,
  selectedImage,
  allImages = [],
  sectionTitle = "Artwork",
}: Readonly<ImageModalProps>) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  // Initialize images and current index when modal opens
  useEffect(() => {
    if (modalOpen && selectedImage) {
      // If allImages is provided, use it, otherwise create a single image array
      const imageArray = allImages.length > 0 ? allImages : [selectedImage];
      setImages(imageArray);

      // Find the index of the selected image in the array
      const index = imageArray.indexOf(selectedImage);
      setCurrentImageIndex(index >= 0 ? index : 0);
    }
  }, [modalOpen, selectedImage, allImages]);

  const handlePrevImage = () => {
    if (images.length <= 1) return;
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    if (images.length <= 1) return;
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;

      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        closeImageModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, closeImageModal]);

  return (
    <Dialog open={modalOpen} onOpenChange={closeImageModal}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent className="max-w-5xl p-0 border-none bg-transparent overflow-hidden">
        <div className="relative">
          <AnimatePresence mode="wait">
            {images[currentImageIndex] && (
              <motion.div
                key={images[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Enlarged ${sectionTitle} artwork ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black/20 backdrop-blur-sm rounded-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Close button */}
          {/* <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 rounded-full bg-white/50 hover:bg-white"
            onClick={closeImageModal}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button> */}

          {/* Navigation arrows - only show if there are multiple images */}
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
