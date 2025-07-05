"use client";
import React, { useState } from "react";
import MasonryGallery from "@/components/MasonryGallery";

const GalleryPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Artwork" },
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
      image: "/images/ceramic_3.png",
      description: "",
    },
    {
      id: 4,
      category: "3d-art",
      title: "",
      image: "/images/ceramic_4.png",
      description: "",
    },

    {
      id: 26,
      category: "3d-art",
      title: "",
      image: "/images/3d-img-1.png",
      description: "",
    },
    // {
    //   id: 5,
    //   category: "ceramics",
    //   title: "Pattern Painting",
    //   image:
    //     "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Learning patterns through paint",
    // },
    // {
    //   id: 6,
    //   category: "ceramics",
    //   title: "Animal Friends",
    //   image:
    //     "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Simple animal shapes and colors",
    // },

    // Photography Art
    {
      id: 7,
      category: "photography",
      title: "",
      image: "/images/tinywow_Photo 31_82159934.avif",
      description: "",
    },
    {
      id: 8,
      category: "photography",
      title: "",
      image: "/images/photo_6.jpg",
      description: "",
    },
    {
      id: 9,
      category: "photography",
      title: "",
      image: "/images/photo_2.jpg",
      description: "",
    },
    {
      id: 10,
      category: "photography",
      title: "",
      image: "/images/photo_3.jpg",
      description: "",
    },
    {
      id: 11,
      category: "photography",
      title: "",
      image: "/images/photo_4.jpg",
      description: "",
    },
    {
      id: 12,
      category: "photography",
      title: "",
      image: "/images/photo_5.jpg",
      description: "",
    },
    {
      id: 14,
      category: "photography",
      title: "",
      image: "/images/photo_2.jpg",
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
    // {
    //   id: 18,
    //   category: "digital-art",
    //   title: "Ceramic Bowl",
    //   image:
    //     "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Hand-building techniques",
    // },
    // {
    //   id: 19,
    //   category: "digital-art",
    //   title: "Abstract Painting",
    //   image:
    //     "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Expressing emotions through color",
    // },
    // {
    //   id: 20,
    //   category: "digital-art",
    //   title: "Printmaking",
    //   image:
    //     "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Linoleum block printing",
    // },

    // 2D Art
    {
      id: 21,
      category: "2d-art",
      title: "",
      image: "/images/2d_img_1.jpg",
      description: "",
    },
    // {
    //   id: 22,
    //   category: "2d-art",
    //   title: "Digital Art Composition",
    //   image:
    //     "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Modern digital techniques",
    // },
    // {
    //   id: 23,
    //   category: "2d-art",
    //   title: "Sculpture Study",
    //   image:
    //     "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "3D form and space exploration",
    // },
    // {
    //   id: 24,
    //   category: "2d-art",
    //   title: "Mixed Media Installation",
    //   image:
    //     "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Contemporary art concepts",
    // },
    // {
    //   id: 25,
    //   category: "2d-art",
    //   title: "Photography Series",
    //   image:
    //     "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    //   description: "Visual storytelling project",
    // },
  ];

  const filteredArtworks =
    selectedCategory === "all"
      ? artworks
      : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-soft-white">
      {/* Header */}
      {/* <div className="bg-cream-pink/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
                  
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-coffee mb-4">
                 Artwork Gallery
              </h1>
              <p className="text-lg text-coffee/70 max-w-2xl mx-auto">
                Explore the creative journey of my work across different category and skill levels. 
                Each piece represents growth, learning, and artistic expression.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=400&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center bg-soft-white/95 p-8 rounded-lg max-w-3xl mx-4 border border-border">
          <h1
            className="text-4xl md:text-5xl font-serif italic text-dusty-rose mb-4"
            style={{ fontFamily: "sacramento,cursive" }}
          >
            Artwork Gallery
          </h1>
          <p className="text-lg text-coffee/80">
            {" "}
            Explore the creative journey of my work across different category and skill
            levels. Each piece represents growth, learning, and artistic expression.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="py-8 bg-soft-white border-b border-cream-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-dusty-rose text-white shadow-lg"
                      : "bg-cream-pink text-coffee hover:bg-dusty-rose/20"
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
          <div className="max-w-7xl mx-auto">
            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-coffee/70 text-lg">
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
      <div className="py-16 bg-gradient-to-br from-cream-pink/50 to-sage-green/10">
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
              className="bg-dusty-rose hover:bg-mauve text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enroll in Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
