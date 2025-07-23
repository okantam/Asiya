"use client";
import React, { useState } from "react";
import MasonryGallery from "@/components/MasonryGallery";

const GalleryPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState("photography");

  const categories = [
    { id: "photography", name: "Photography" },
    { id: "digital-art", name: "Digital Art" },
    { id: "2d-art", name: "2D Art" },
    { id: "3d-art", name: "3D Art" },
  ];

  const artworks = [
    // 3D and  Ceramic Art
    {
      id: 1,
      category: "3d-art",
      title: "",
      image: "/images/ceramic_1.png",
      description: "",
    },
    {
      id: 2,
      category: "3d-art",
      title: "",
      image: "/images/ceramic_2.png",
      description: "",
    },
    {
      id: 3,
      category: "3d-art",
      title: "",
      image: "/images/ceramic_4.png",
      description: "",
    },
    {
      id: 4,
      category: "3d-art",
      title: "",
      image: "/images/ceramic_3.png",
      description: "",
    },

    {
      id: 26,
      category: "3d-art",
      title: "",
      image: "/images/3d-img-1.png",
      description: "",
    },

    // Photography Art
    {
      id: 6,
      category: "photography",
      title: "",
      image: "/images/photo_3.jpg",
      description: "",
    },
    {
      id: 66,
      category: "photography",
      title: "",
      image: "/images/forest-img-2.jpg",
      description: "",
    },
    {
      id: 7,
      category: "photography",
      title: "",
      image: "/images/photo_2.jpg",
      description: "",
    },
    {
      id: 77,
      category: "photography",
      title: "",
      image: "/images/forest-img-4.jpg",
      description: "",
    },
    {
      id: 88,
      category: "photography",
      title: "",
      image: "/images/forest-img-3.jpg",
      description: "",
    },
    {
      id: 8,
      category: "photography",
      title: "",
      image: "/images/photo_1.jpg",
      description: "",
    },
    {
      id: 9,
      category: "photography",
      title: "",
      image: "/images/tinywow_Photo 31_82159934.avif",
      description: "",
    },
    {
      id: 99,
      category: "photography",
      title: "",
      image: "/images/photo_5.jpg",
      description: "",
    },
    {
      id: 10,
      category: "photography",
      title: "",
      image: "/images/markup-man-img.jpg",
      description: "",
    },
    {
      id: 11,
      category: "photography",
      title: "",
      image: "/images/photo_6.jpg",
      description: "",
    },
    {
      id: 111,
      category: "photography",
      title: "",
      image: "/images/sea-side-img-2.jpg",
      description: "",
    },
    {
      id: 122,
      category: "photography",
      title: "",
      image: "/images/sea-side-img.jpg",
      description: "",
    },
    {
      id: 1222,
      category: "photography",
      title: "",
      image: "/images/face-img-1.jpg",
      description: "",
    },
    {
      id: 1223,
      category: "photography",
      title: "",
      image: "/images/face-img-3.jpg",
      description: "",
    },
    {
      id: 1224,
      category: "photography",
      title: "",
      image: "/images/face-img-2.jpg",
      description: "",
    },
    {
      id: 1225,
      category: "photography",
      title: "",
      image: "/images/official-img-2.jpg",
      description: "",
    },
    {
      id: 1226,
      category: "photography",
      title: "",
      image: "/images/official-img-3.jpg",
      description: "",
    },
    {
      id: 1227,
      category: "photography",
      title: "",
      image: "/images/official-img-1.jpg",
      description: "",
    },
    {
      id: 113,
      category: "photography",
      title: "",
      image: "/images/photo_7.jpg",
      description: "",
    },
    {
      id: 114,
      category: "photography",
      title: "",
      image: "/images/photo_8.jpg",
      description: "",
    },
    {
      id: 115,
      category: "photography",
      title: "",
      image: "/images/photo_9.png",
      description: "",
    },
    {
      id: 116,
      category: "photography",
      title: "",
      image: "/images/photo_10.jpg",
      description: "",
    },
    {
      id: 117,
      category: "photography",
      title: "",
      image: "/images/photo_11.jpg",
      description: "",
    },
    {
      id: 118,
      category: "photography",
      title: "",
      image: "/images/photo_12.jpg",
      description: "",
    },
    {
      id: 119,
      category: "photography",
      title: "",
      image: "/images/lady-model-img-4.jpg",
      description: "",
    },
    {
      id: 120,
      category: "photography",
      title: "",
      image: "/images/lady-model-img-6.jpg",
      description: "",
    },
    {
      id: 121,
      category: "photography",
      title: "",
      image: "/images/lady-model-img-5.jpg",
      description: "",
    },
    {
      id: 1121,
      category: "photography",
      title: "",
      image: "/images/lady-model.avif",
      description: "",
    },
    {
      id: 1221,
      category: "photography",
      title: "",
      image: "/images/lady-model.avif",
      description: "",
    },
    {
      id: 1321,
      category: "photography",
      title: "",
      image: "/images/lady-model.avif",
      description: "",
    },

    // Digital Art
    {
      id: 15,
      category: "digital-art",
      title: "",
      image: "/images/digital_1.JPG",
      description: "",
    },
    {
      id: 16,
      category: "digital-art",
      title: "",
      image: "/images/digital_2.jpg",
      description: "",
    },
    {
      id: 17,
      category: "digital-art",
      title: "",
      image: "/images/digital_3.jpg",
      description: "",
    },

    // 2D Art
    {
      id: 21,
      category: "2d-art",
      title: "",
      image: "/images/2d_img_1.jpg",
      description: "",
    },
  ];

  const filteredArtworks = artworks.filter(
    artwork => artwork.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800">
      <section className="relative h-[400px] bg-gradient-to-br from-coral-300 to-pink-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
        <div className="relative z-10 text-center bg-soft-white/95 dark:bg-gray-800/95 p-8 rounded-lg max-w-3xl mx-4 border border-border dark:border-gray-700">
          <h1
            className="text-4xl md:text-5xl font-serif italic text-coral-600 dark:text-coral-400 mb-4"
            style={{ fontFamily: "sacramento,cursive" }}
          >
            Artwork Gallery
          </h1>
          <p className="text-lg text-coffee/80 dark:text-gray-300">
            {" "}
            Explore the creative journey of my work across different category and skill
            levels. Each piece represents growth, learning, and artistic expression.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="py-8 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-coral-600 dark:bg-coral-700 text-white shadow-lg"
                      : "bg-coral-50 dark:bg-gray-700 text-coffee dark:text-gray-200 hover:bg-coral-100 dark:hover:bg-gray-600 hover:text-coffee/80 dark:hover:text-white/90"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-coffee/70 dark:text-gray-400 text-lg">
                  No artwork found for the selected category.
                </p>
              </div>
            ) : (
              <MasonryGallery portfolioData={filteredArtworks} />
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="py-16 bg-gradient-to-br from-cream-pink/50 to-sage-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-coffee mb-4">
              Inspire Your Child's Creativity
            </h2>
            <p className="text-lg text-coffee/70 mb-8">
              Join our art classes and watch your child's artistic abilities flourish.
              Every masterpiece starts with a single brushstroke.
            </p>
            <button
              onClick={onBack}
              className="bg-coral-600 hover:bg-mauve text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enroll in Classes
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GalleryPage;
