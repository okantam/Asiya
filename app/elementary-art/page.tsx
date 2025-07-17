"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ElementaryArtPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const kindergartenImages = [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    // "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
    // "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
    // "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  ];

  const gradesImages = [
    // "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    // "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
  ];

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % gradesImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + gradesImages.length) % gradesImages.length);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Elementary Art</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Students explore colors, shapes, and textures, building creative foundations
            through play and curiosity.
          </p>
        </div>

        {/* Kindergarten Art Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif italic text-center text-gray-800 mb-8">
            Kindergarten Art Images
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-6">
            {kindergartenImages.map(image => (
              <div
                key={image}
                className="bg-white rounded-lg shadow-lg relative group overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Kindergarten artwork`}
                  width={400}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Grades 1,2,3 Art Images */}
        <section>
          <h2 className="text-3xl font-serif italic text-center text-gray-800 mb-8">
            Grades 1,2,3 Art Images
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={gradesImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Grades 1-3 artwork ${currentImageIndex + 1}`}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 shadow-lg"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {gradesImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-green-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
