import Image from "next/image"

export default function HighSchoolArtPage() {
  const portfolioSections = [
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
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">High School Art</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced students refine their skills, explore personal themes, and blend traditional and digital
            techniques.
          </p>
        </div>

        {portfolioSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif italic text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${section.title} artwork ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
