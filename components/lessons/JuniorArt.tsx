"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface JuniorArtSection {
  title: string;
  description: string;
  images: string[];
}

interface JuniorArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string) => void;
}

export default function JuniorArt({ activeTab, openImageModal }: JuniorArtProps) {
  // State for slidable image galleries
  const [juniorImageIndexes, setJuniorImageIndexes] = useState<number[]>([]);

  // Auto-sliding states
  const SLIDE_INTERVAL = 5000; // 5 seconds between slides
  const AUTO_SLIDE_RESUME_DELAY = 10000; // 10 seconds before auto-slide resumes after manual navigation
  const [autoSlideJunior, setAutoSlideJunior] = useState<boolean[]>([]); // For junior art sections

  // Junior art section data
  const juniorArtworks: JuniorArtSection[] = [
    {
      title: "Tee Shirt Design",
      description: "Students experiment with various materials and textures",
      images: ["/images/junior-img-1.avif", "/images/junior-img-2.jpg"],
    },
  ];

  // Junior art navigation functions
  useEffect(() => {
    // Initialize junior image indexes if needed
    if (juniorImageIndexes.length < juniorArtworks.length) {
      setJuniorImageIndexes(new Array(juniorArtworks.length).fill(0));
    }

    // Initialize auto-slide states if needed
    if (autoSlideJunior.length < juniorArtworks.length) {
      setAutoSlideJunior(new Array(juniorArtworks.length).fill(true)); // Default auto-slide to true
    }
  }, [juniorArtworks.length, juniorImageIndexes.length, autoSlideJunior.length]);

  // Setup auto-sliding for each junior art section
  useEffect(() => {
    // Create an array of intervals for junior art sections
    const intervals = juniorArtworks
      .map((section, idx) => {
        if (activeTab === "junior" && autoSlideJunior[idx] && section.images.length > 1) {
          return setInterval(() => {
            nextJuniorImage(idx);
          }, SLIDE_INTERVAL);
        }
        return null;
      })
      .filter(Boolean); // Filter out null intervals

    // Cleanup function to clear all intervals
    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [activeTab, autoSlideJunior, juniorArtworks]);

  const setJuniorImageIndex = (sectionIdx: number, imageIdx: number) => {
    const newIndexes = [...juniorImageIndexes];
    newIndexes[sectionIdx] = imageIdx;
    setJuniorImageIndexes(newIndexes);

    // Pause auto-slide temporarily when manually changing images
    if (sectionIdx < autoSlideJunior.length && autoSlideJunior[sectionIdx]) {
      const newStates = [...autoSlideJunior];
      newStates[sectionIdx] = false;
      setAutoSlideJunior(newStates);

      // Resume auto-slide after delay
      setTimeout(() => {
        if (activeTab === "junior") {
          const resumeStates = [...autoSlideJunior];
          resumeStates[sectionIdx] = true;
          setAutoSlideJunior(resumeStates);
        }
      }, AUTO_SLIDE_RESUME_DELAY);
    }
  };

  const nextJuniorImage = (sectionIdx: number) => {
    if (sectionIdx >= juniorArtworks.length) return;

    const section = juniorArtworks[sectionIdx];
    if (!section || section.images.length === 0) return;

    const currentIndex = juniorImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex + 1) % section.images.length;
    setJuniorImageIndex(sectionIdx, newIndex);
  };

  const prevJuniorImage = (sectionIdx: number) => {
    if (sectionIdx >= juniorArtworks.length) return;

    const section = juniorArtworks[sectionIdx];
    if (!section || section.images.length === 0) return;

    const currentIndex = juniorImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex - 1 + section.images.length) % section.images.length;
    setJuniorImageIndex(sectionIdx, newIndex);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Junior Art</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Growing artists experiment with techniques, materials, and self-expression,
          gaining confidence and creativity.
        </p>
      </div>

      {juniorArtworks.length > 0 ? (
        <div className="space-y-24">
          {/* Display all junior sections vertically */}
          {juniorArtworks.map((section, sectionIndex) => (
            <section
              key={`junior-section-${section.title}-${sectionIndex}`}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">{section.description}</p>
              </div>

              {/* Image Carousel for this section */}
              <div className="relative max-w-4xl mx-auto">
                {section.images.length > 0 ? (
                  <>
                    <button
                      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full border-0 p-0"
                      onClick={() => {
                        // Open the modal with the current image
                        openImageModal(
                          section.images[juniorImageIndexes[sectionIndex] || 0]
                        );
                      }}
                      aria-label={`Enlarge ${section.title} artwork`}
                    >
                      <Image
                        src={
                          section.images[juniorImageIndexes[sectionIndex] || 0] ||
                          "/placeholder.svg"
                        }
                        alt={`${section.title} artwork ${
                          (juniorImageIndexes[sectionIndex] || 0) + 1
                        }`}
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
                    {section.images.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                          onClick={() => prevJuniorImage(sectionIndex)}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                          onClick={() => nextJuniorImage(sectionIndex)}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}

                    {/* Dots Indicator */}
                    {section.images.length > 1 && (
                      <div className="flex justify-center mt-6 space-x-2">
                        {section.images.map((img, imgIndex) => (
                          <button
                            key={`junior-dot-${section.title}-${img}-${imgIndex}`}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              imgIndex === (juniorImageIndexes[sectionIndex] || 0)
                                ? "bg-dusty-rose"
                                : "bg-gray-300"
                            }`}
                            onClick={() => setJuniorImageIndex(sectionIndex, imgIndex)}
                            aria-label={`View image ${imgIndex + 1}`}
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
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600">No artwork available for this section yet.</p>
        </div>
      )}
    </div>
  );
}
