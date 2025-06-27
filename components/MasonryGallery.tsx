
"use client";
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ArtworkItem {
  id: number;
  title: string;
  level: string;
  image: string;
  height: number;
}

const MasonryGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworks: ArtworkItem[] = [
    {
      id: 1,
      title: "Colorful Bird Study",
      level: "Elementary",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      height: 300
    },
    {
      id: 2,
      title: "Abstract Expression",
      level: "High School",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop",
      height: 400
    },
    {
      id: 3,
      title: "Nature Collage",
      level: "Middle School",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      height: 250
    },
    {
      id: 4,
      title: "Portrait Study",
      level: "High School",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=450&fit=crop",
      height: 450
    },
    {
      id: 5,
      title: "Watercolor Landscape",
      level: "Elementary",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=320&fit=crop",
      height: 320
    },
    {
      id: 6,
      title: "Mixed Media Art",
      level: "Middle School",
      image: "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=400&h=380&fit=crop",
      height: 380
    },
    {
      id: 7,
      title: "Digital Art Creation",
      level: "High School",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=280&fit=crop",
      height: 280
    },
    {
      id: 8,
      title: "Clay Sculpture",
      level: "Elementary",
      image: "https://images.unsplash.com/photo-1594736797933-d0303ba0d16d?w=400&h=350&fit=crop",
      height: 350
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Elementary':
        return 'bg-blue-100 text-blue-800';
      case 'Middle School':
        return 'bg-green-100 text-green-800';
      case 'High School':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="break-inside-avoid">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative group">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full object-cover transition-transform duration-300"
                  style={{ height: `${artwork.height}px` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transform hover:scale-110 transition-transform"
                        onClick={() => setSelectedImage(artwork.image)}
                      >
                        <Eye className="h-6 w-6 text-gray-800" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none">
                      <div className="relative">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
                          <h3 className="text-xl font-bold">{artwork.title}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getLevelColor(artwork.level)}`}>
                            {artwork.level}
                          </span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{artwork.title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(artwork.level)}`}>
                  {artwork.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
 
  );
};

export default MasonryGallery;