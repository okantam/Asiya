"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface HighSchoolSection {
  title: string;
  description: string;
  images: string[];
}

interface HighSchoolArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string) => void;
}

export default function HighSchoolArt({ activeTab, openImageModal }: HighSchoolArtProps) {
  // State for slidable image galleries
  const [sectionImageIndexes, setSectionImageIndexes] = useState<number[]>([]);

  // Auto-sliding states
  const SLIDE_INTERVAL = 3000; // 5 seconds between slides
  const AUTO_SLIDE_RESUME_DELAY = 10000; // 10 seconds before auto-slide resumes after manual navigation
  const [autoSlideHighSchool, setAutoSlideHighSchool] = useState<boolean[]>([]); // For high school sections

  // High School art section data
  const highSchoolPortfolioSections: HighSchoolSection[] = [
    {
      title: "Advanced Drawing & Painting",
      description: "Students develop sophisticated techniques in traditional media",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      ],
    },
    {
      title: "Digital Art & Design",
      description: "Exploring contemporary digital tools and design principles",
      images: [
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      ],
    },
    {
      title: "Sculpture & 3D Art",
      description: "Three-dimensional exploration using various materials and techniques",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=350&h=350&fit=crop",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=350&h=350&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=350&h=350&fit=crop",
      ],
    },
    {
      title: "Personal Expression Projects",
      description: "Student-driven projects exploring individual themes and concepts",
      images: [
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      ],
    },
  ];

  // High school section image navigation
  // Initialize section image indexes if they don't exist yet
  useEffect(() => {
    if (sectionImageIndexes.length < highSchoolPortfolioSections.length) {
      setSectionImageIndexes(new Array(highSchoolPortfolioSections.length).fill(0));
    }

    // Initialize auto-slide states if needed
    if (autoSlideHighSchool.length < highSchoolPortfolioSections.length) {
      setAutoSlideHighSchool(new Array(highSchoolPortfolioSections.length).fill(true)); // Default auto-slide to true
    }
  }, [
    highSchoolPortfolioSections.length,
    sectionImageIndexes.length,
    autoSlideHighSchool.length,
  ]);

  // Setup auto-sliding for each high school section
  useEffect(() => {
    // Create an array of intervals for high school sections
    const intervals = highSchoolPortfolioSections
      .map((section, idx) => {
        if (
          activeTab === "high-school" &&
          autoSlideHighSchool[idx] &&
          section.images.length > 1
        ) {
          return setInterval(() => {
            nextSectionImage(idx);
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
  }, [activeTab, autoSlideHighSchool, highSchoolPortfolioSections]);

  // Set specific section image index
  const setSectionImageIndex = (sectionIdx: number, imageIdx: number) => {
    const newIndexes = [...sectionImageIndexes];
    newIndexes[sectionIdx] = imageIdx;
    setSectionImageIndexes(newIndexes);

    // Pause auto-slide temporarily when manually changing images
    if (sectionIdx < autoSlideHighSchool.length && autoSlideHighSchool[sectionIdx]) {
      const newStates = [...autoSlideHighSchool];
      newStates[sectionIdx] = false;
      setAutoSlideHighSchool(newStates);

      // Resume auto-slide after delay
      setTimeout(() => {
        if (activeTab === "high-school") {
          const resumeStates = [...autoSlideHighSchool];
          resumeStates[sectionIdx] = true;
          setAutoSlideHighSchool(resumeStates);
        }
      }, AUTO_SLIDE_RESUME_DELAY);
    }
  };

  // Next image for a specific section
  const nextSectionImage = (sectionIdx: number) => {
    if (sectionIdx >= highSchoolPortfolioSections.length) return;

    const section = highSchoolPortfolioSections[sectionIdx];
    if (!section || section.images.length === 0) return;

    const currentIndex = sectionImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex + 1) % section.images.length;
    setSectionImageIndex(sectionIdx, newIndex);
  };

  // Previous image for a specific section
  const prevSectionImage = (sectionIdx: number) => {
    if (sectionIdx >= highSchoolPortfolioSections.length) return;

    const section = highSchoolPortfolioSections[sectionIdx];
    if (!section || section.images.length === 0) return;

    const currentIndex = sectionImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex - 1 + section.images.length) % section.images.length;
    setSectionImageIndex(sectionIdx, newIndex);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">High School Art</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Advanced students refine their skills, explore personal themes, and blend
          traditional and digital techniques.
        </p>
      </div>

      {highSchoolPortfolioSections.length > 0 ? (
        <div className="space-y-24">
          {/* Display all sections vertically */}
          {highSchoolPortfolioSections.map((section, sectionIndex) => (
            <section
              key={`hs-section-${section.title}-${sectionIndex}`}
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
                          section.images[sectionImageIndexes[sectionIndex] || 0]
                        );
                      }}
                      aria-label={`Enlarge ${section.title} artwork`}
                    >
                      <Image
                        src={
                          section.images[sectionImageIndexes[sectionIndex] || 0] ||
                          section.images[0] ||
                          "/placeholder.svg"
                        }
                        alt={`${section.title} artwork ${
                          (sectionImageIndexes[sectionIndex] || 0) + 1
                        }`}
                        width={600}
                        height={400}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/5 hover:bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium">
                          <Eye className="inline h-4 w-4" />
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
                          onClick={() => prevSectionImage(sectionIndex)}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
                          onClick={() => nextSectionImage(sectionIndex)}
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
                            key={`hs-dot-${section.title}-${img}-${imgIndex}`}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              imgIndex === (sectionImageIndexes[sectionIndex] || 0)
                                ? "bg-dusty-rose"
                                : "bg-gray-300"
                            }`}
                            onClick={() => setSectionImageIndex(sectionIndex, imgIndex)}
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
