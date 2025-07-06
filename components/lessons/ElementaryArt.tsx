"use client";

import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

interface ElementaryArtProps {
  activeTab: string;
  openImageModal: (imageSrc: string, images?: string[], sectionTitle?: string) => void;
}

export default function ElementaryArt({
  activeTab,
  openImageModal,
}: Readonly<ElementaryArtProps>) {
  // State for slidable image galleries
  const [sectionImageIndexes, setSectionImageIndexes] = useState<number[]>([]);

  // Auto-sliding states
  const SLIDE_INTERVAL = 5000; // 5 seconds between slides
  const AUTO_SLIDE_RESUME_DELAY = 10000; // 10 seconds before auto-slide resumes after manual navigation
  const [autoSlideHighSchool, setAutoSlideHighSchool] = useState<boolean[]>([]);

  const elementaryArtworks = [
    {
      title: "Paper Plate Mask",
      description:
        "Our second grade artists at Camp Art Academy. had a blast transforming simple materials such as paper plates into wearable art! This project sparked their imagination while introducing key elements of mask-making and storytelling",
      images: ["/images/paper-mask-1.jpg", "/images/paper-mask-2.jpg"],
    },
    {
      title: "King Tut Pharaoh Mask",
      description:
        "Through paint, texture, and design, students explored ancient Egyptian art and brought history to life with their golden King Tut masks. A beautiful blend of creativity and cultural learning",
      images: [
        "/images/elementary-img-1.jpg",
        "/images/elementary-img-2.jpg",
        "/images/elementary-img-3.jpg",
        "/images/elementary-img-4.jpg",
      ],
    },
    {
      title: "Paper Puppets Art",
      description:
        "With imagination as their guide, students crafted unique paper puppets and brought them to life. These playful characters reflect each artist creativity",
      images: [
        "/images/paper-puppet-1.jpg",
        "/images/paper-puppet-2.jpg",
        "/images/paper-puppet-3.jpg",
        "/images/paper-puppet-4.jpg",
      ],
    },
    {
      title: "Sugar Skull Art",
      description:
        "Inspired by Día de los Muertos traditions, students used bold colors and textures to celebrate life and culture through their handcrafted sugar skulls. Each piece is full of personality and meaning.",
      images: [
        "/images/sugar-skull-1.jpg",
        "/images/sugar-skull-2.jpg",
        "/images/sugar-skull-3.jpg",
        "/images/sugar-skull-4.jpg",
        "/images/sugar-skull-5.jpg",
      ],
    },
    {
      title: " Basquiat-Inspired Street Art",
      description:
        "Channeling the expressive style of Jean-Michel Basquiat, students let loose with color, line, and emotion. These powerful portraits are testaments to fearless mark-making and individual expression",
      images: [
        "/images/crayon-and-acrylic-1.jpg",
        "/images/crayon-and-acrylic-2.jpg",
        "/images/crayon-and-acrylic-3.jpg",
      ],
    },
    {
      title: "Mini Robots Art",
      description:
        "Students engineered their own mini robot sculptures using recycled materials like cardboard, foil, and buttons. A hands-on fusion of art and STEM, these robots reflect both imagination and innovation.",
      images: [
        "/images/mini-robotic-1.jpg",
        "/images/mini-robotic-2.jpg",
        "/images/mini-robotic-3.jpg",
      ],
    },
    {
      title: "Surrealist Inspired Art",
      description:
        "With scissors, glue, and big imaginations, students made surrealist collages that mix the real with the unreal. This project was all about seeing the world in a new and playful way.",
      images: ["/images/surrealist-art-1.png"],
    },
  ];

  // Elementary art navigation functions
  useEffect(() => {
    if (sectionImageIndexes.length < elementaryArtworks.length) {
      setSectionImageIndexes(new Array(elementaryArtworks.length).fill(0));
    }

    // Initialize auto-slide states if needed
    if (autoSlideHighSchool.length < elementaryArtworks.length) {
      setAutoSlideHighSchool(new Array(elementaryArtworks.length).fill(true)); // Default auto-slide to true
    }
  }, [elementaryArtworks.length, sectionImageIndexes.length, autoSlideHighSchool.length]);

  // Auto-sliding for elementary art sections - continuous while tab is active
  useEffect(() => {
    // Create an array of intervals for high school sections
    const intervals = elementaryArtworks
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
  }, [activeTab, autoSlideHighSchool, elementaryArtworks]);

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
    if (sectionIdx >= elementaryArtworks.length) return;

    const section = elementaryArtworks[sectionIdx];
    if (!section || section.images.length === 0) return;

    const currentIndex = sectionImageIndexes[sectionIdx] || 0;
    const newIndex = (currentIndex + 1) % section.images.length;
    setSectionImageIndex(sectionIdx, newIndex);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Elementary Art</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Students explore colors, shapes, and textures, building creative foundations
          through play and curiosity.
        </p>
      </div>

      {elementaryArtworks.length > 0 ? (
        <div className="space-y-24">
          {/* Display all sections vertically */}
          {elementaryArtworks.map((section, sectionIndex) => (
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
