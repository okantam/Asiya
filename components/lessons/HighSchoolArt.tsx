"use client";

import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

interface HighSchoolSection {
  title: string;
  description: string;
  images: string[];
}

interface HighSchoolArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string) => void;
}

export default function HighSchoolArt({
  activeTab,
  openImageModal,
}: Readonly<HighSchoolArtProps>) {
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
              <ImageCarousel
                images={section.images}
                sectionTitle={section.title}
                currentIndex={sectionImageIndexes[sectionIndex] || 0}
                setCurrentIndex={index => setSectionImageIndex(sectionIndex, index)}
                autoSlide={autoSlideHighSchool[sectionIndex] || false}
                setAutoSlide={value => {
                  const newStates = [...autoSlideHighSchool];
                  newStates[sectionIndex] = value;
                  setAutoSlideHighSchool(newStates);
                }}
                onImageClick={openImageModal}
                activeTab={activeTab}
                tabId="high-school"
                sectionIndex={sectionIndex}
              />
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
