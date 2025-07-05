"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ElementaryArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string) => void;
}

export default function ElementaryArt({ activeTab, openImageModal }: ElementaryArtProps) {
  // State for slidable image galleries
  const [elementaryImageIndexes, setElementaryImageIndexes] = useState<number[]>([0, 0]); // [kindergarten, grades1-3]

  // Auto-sliding states
  const SLIDE_INTERVAL = 5000; // 5 seconds between slides
  const AUTO_SLIDE_RESUME_DELAY = 10000; // 10 seconds before auto-slide resumes after manual navigation
  const [autoSlideElementary, setAutoSlideElementary] = useState<boolean[]>([true, true]); // For kindergarten and grades 1-3

  // Elementary art images
  const kindergartenImages = [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
  ];

  const gradesImages = [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
  ];

  // Elementary art navigation functions
  useEffect(() => {
    // Make sure elementaryImageIndexes is initialized
    if (elementaryImageIndexes.length < 2) {
      setElementaryImageIndexes([0, 0]); // [kindergarten, grades1-3]
    }

    // Initialize auto-slide states if needed
    if (autoSlideElementary.length < 2) {
      setAutoSlideElementary([true, true]); // Default auto-slide to true
    }
  }, [elementaryImageIndexes.length, autoSlideElementary.length]);

  // Auto-sliding for elementary art sections - continuous while tab is active
  useEffect(() => {
    // Create interval for kindergarten images
    let kindergartenInterval: NodeJS.Timeout | null = null;
    if (
      activeTab === "elementary" &&
      autoSlideElementary[0] &&
      kindergartenImages.length > 1
    ) {
      kindergartenInterval = setInterval(() => {
        nextElementaryImage(0);
      }, SLIDE_INTERVAL);
    }

    // Create interval for grades 1-3 images
    let gradesInterval: NodeJS.Timeout | null = null;
    if (activeTab === "elementary" && autoSlideElementary[1] && gradesImages.length > 1) {
      gradesInterval = setInterval(() => {
        nextElementaryImage(1);
      }, SLIDE_INTERVAL);
    }

    // Cleanup function to clear intervals
    return () => {
      if (kindergartenInterval) clearInterval(kindergartenInterval);
      if (gradesInterval) clearInterval(gradesInterval);
    };
  }, [activeTab, autoSlideElementary, kindergartenImages.length, gradesImages.length]); // Only necessary dependencies

  const setElementaryImageIndex = (sectionIdx: number, imageIdx: number) => {
    const newIndexes = [...elementaryImageIndexes];
    newIndexes[sectionIdx] = imageIdx;
    setElementaryImageIndexes(newIndexes);

    // Pause auto-slide temporarily when manually changing images
    if (autoSlideElementary[sectionIdx]) {
      const newStates = [...autoSlideElementary];
      newStates[sectionIdx] = false;
      setAutoSlideElementary(newStates);

      // Resume auto-slide after delay
      setTimeout(() => {
        if (activeTab === "elementary") {
          const resumeStates = [...autoSlideElementary];
          resumeStates[sectionIdx] = true;
          setAutoSlideElementary(resumeStates);
        }
      }, AUTO_SLIDE_RESUME_DELAY);
    }
  };

  const nextElementaryImage = (sectionIdx: number) => {
    const images = sectionIdx === 0 ? kindergartenImages : gradesImages;
    if (images.length === 0) return;

    const currentIndex = elementaryImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex + 1) % images.length;
    setElementaryImageIndex(sectionIdx, newIndex);
  };

  const prevElementaryImage = (sectionIdx: number) => {
    const images = sectionIdx === 0 ? kindergartenImages : gradesImages;
    if (images.length === 0) return;

    const currentIndex = elementaryImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setElementaryImageIndex(sectionIdx, newIndex);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Elementary Art</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Students explore colors, shapes, and textures, building creative foundations
          through play and curiosity.
        </p>
      </div>

      <div className="space-y-24">
        {/* Kindergarten Art Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
              Kindergarten Art
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our youngest artists explore basic art elements through imaginative play and
              discovery.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {kindergartenImages.length > 0 ? (
              <>
                <button
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full border-0 p-0"
                  onClick={() =>
                    openImageModal(kindergartenImages[elementaryImageIndexes[0] || 0])
                  }
                  aria-label="Enlarge kindergarten artwork"
                >
                  <Image
                    src={
                      kindergartenImages[elementaryImageIndexes[0] || 0] ||
                      "/placeholder.svg"
                    }
                    alt="Kindergarten artwork"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </button>

                {/* Navigation Arrows */}
                {kindergartenImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                      onClick={() => prevElementaryImage(0)}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                      onClick={() => nextElementaryImage(0)}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}

                {/* Dots Indicator */}
                {kindergartenImages.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {kindergartenImages.map((img, imgIndex) => (
                      <button
                        key={`kinder-dot-${img}-${imgIndex}`}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          imgIndex === (elementaryImageIndexes[0] || 0)
                            ? "bg-green-600"
                            : "bg-gray-300"
                        }`}
                        onClick={() => setElementaryImageIndex(0, imgIndex)}
                        aria-label={`View kindergarten image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p>No images available for this section.</p>
              </div>
            )}
          </div>
        </section>

        {/* Grades 1-3 Art Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
              Grades 1-3 Art
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Young artists develop skills through guided exploration of techniques and
              materials.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {gradesImages.length > 0 ? (
              <>
                <button
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full border-0 p-0"
                  onClick={() =>
                    openImageModal(gradesImages[elementaryImageIndexes[1] || 0])
                  }
                  aria-label="Enlarge grades 1-3 artwork"
                >
                  <Image
                    src={
                      gradesImages[elementaryImageIndexes[1] || 0] || "/placeholder.svg"
                    }
                    alt={`Grades 1-3 artwork ${(elementaryImageIndexes[1] || 0) + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </button>

                {/* Navigation Arrows */}
                {gradesImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                      onClick={() => prevElementaryImage(1)}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                      onClick={() => nextElementaryImage(1)}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}

                {/* Dots Indicator */}
                {gradesImages.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {gradesImages.map((img, imgIndex) => (
                      <button
                        key={`grades-dot-${img}-${imgIndex}`}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          imgIndex === (elementaryImageIndexes[1] || 0)
                            ? "bg-green-600"
                            : "bg-gray-300"
                        }`}
                        onClick={() => setElementaryImageIndex(1, imgIndex)}
                        aria-label={`View grades 1-3 image ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p>No images available for this section.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
