"use client";
import React, { useState } from 'react';
import MasonryGallery from '@/components/MasonryGallery';

const GalleryPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Artwork' },
    { id: 'ceramics', name: 'Ceramics' },
    { id: 'photography', name: 'Photography' },
    { id: 'digital-art', name: 'Digital Art' },
    { id: '2d-art', name: '2D Art' }
  ];

  const artworks = [
    // Kindergarten Art
    { id: 1, category: 'kindergarten', title: 'Colorful Shapes', image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Exploring basic shapes and primary colors' },
    { id: 2, category: 'kindergarten', title: 'My Family', image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Simple figure drawing with crayons' },
    { id: 3, category: 'kindergarten', title: 'Rainbow Fish', image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Watercolor and tissue paper collage' },
    { id: 4, category: 'kindergarten', title: 'Handprint Tree', image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Seasonal handprint art project' },
    { id: 5, category: 'kindergarten', title: 'Pattern Painting', image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Learning patterns through paint' },
    { id: 6, category: 'kindergarten', title: 'Animal Friends', image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Simple animal shapes and colors' },

    // Elementary Art
    { id: 7, category: 'elementary', title: 'Landscape Study', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Watercolor landscape techniques' },
    { id: 8, category: 'elementary', title: 'Self Portrait', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Proportions and facial features' },
    { id: 9, category: 'elementary', title: 'Still Life', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Observational drawing skills' },
    { id: 10, category: 'elementary', title: 'Abstract Collage', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Mixed media exploration' },
    { id: 11, category: 'elementary', title: 'Color Wheel', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Understanding color theory' },
    { id: 12, category: 'elementary', title: 'Texture Study', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Exploring different textures' },
    { id: 13, category: 'elementary', title: 'Nature Prints', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Leaf and flower printing' },
    { id: 14, category: 'elementary', title: 'Geometric Art', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Shapes and patterns' },

    // Middle School Art
    { id: 15, category: 'middle', title: 'Perspective Drawing', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'One-point perspective cityscape' },
    { id: 16, category: 'middle', title: 'Charcoal Portrait', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Advanced shading techniques' },
    { id: 17, category: 'middle', title: 'Pop Art Design', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Inspired by Andy Warhol' },
    { id: 18, category: 'middle', title: 'Ceramic Bowl', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Hand-building techniques' },
    { id: 19, category: 'middle', title: 'Abstract Painting', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Expressing emotions through color' },
    { id: 20, category: 'middle', title: 'Printmaking', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Linoleum block printing' },

    // High School Art
    { id: 21, category: 'high', title: 'Oil Painting Portrait', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Advanced painting techniques' },
    { id: 22, category: 'high', title: 'Digital Art Composition', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Modern digital techniques' },
    { id: 23, category: 'high', title: 'Sculpture Study', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: '3D form and space exploration' },
    { id: 24, category: 'high', title: 'Mixed Media Installation', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Contemporary art concepts' },
    { id: 25, category: 'high', title: 'Photography Series', image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'Visual storytelling project' },
    { id: 26, category: 'high', title: 'Portfolio Piece', image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', description: 'College application artwork' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
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
          <h1 className="text-4xl md:text-5xl font-serif italic text-dusty-rose mb-4" style={{ fontFamily: "sacramento,cursive" }}>
          Artwork Gallery
          </h1>
          <p className="text-lg text-coffee/80"> Explore the creative journey of my work across different category and skill levels. 
          Each piece represents growth, learning, and artistic expression.</p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="py-8 bg-soft-white border-b border-cream-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
           
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-dusty-rose text-white shadow-lg'
                      : 'bg-cream-pink text-coffee hover:bg-dusty-rose/20'
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
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="group bg-soft-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-coffee mb-1 group-hover:text-dusty-rose transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-sm text-coffee/70 leading-relaxed">
                      {artwork.description}
                    </p>
                    
                    <div className="mt-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        artwork.category === 'kindergarten' ? 'bg-sage-green/20 text-sage-green' :
                        artwork.category === 'elementary' ? 'bg-dusty-rose/20 text-dusty-rose' :
                        artwork.category === 'middle' ? 'bg-mauve/20 text-mauve' :
                        'bg-warm-brown/20 text-warm-brown'
                      }`}>
                        {categories.find(cat => cat.id === artwork.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* {filteredArtworks.length === 0 && (
              <div className="text-center py-16">
                <p className="text-coffee/70 text-lg">No artwork found for the selected category.</p>
              </div>
            )} */}
              <MasonryGallery/>
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