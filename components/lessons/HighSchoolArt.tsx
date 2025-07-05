"use client";

import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import { FileText } from "lucide-react";

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
  const highSchoolPortfolioSections: HighSchoolSection[] = [];

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
          <div className="max-w-md mx-auto">
            <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No Artworks Available
            </h3>
            <p className="text-gray-600">
              There are currently no artworks available for this category. Please check
              back later or select a different category.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
