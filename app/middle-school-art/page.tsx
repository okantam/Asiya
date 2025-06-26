import Image from "next/image"

export default function MiddleSchoolArtPage() {
  const artworks = [
    {
      title: "Mixed Media Collages",
      description: "Students experiment with various materials and textures",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
      ],
    },
    {
      title: "Portrait Studies",
      description: "Exploring facial features and expressions through different mediums",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      ],
    },
    {
      title: "Abstract Compositions",
      description: "Students develop their understanding of color theory and composition",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
      ],
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Middle School Art</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Growing artists experiment with techniques, materials, and self-expression, gaining confidence and
            creativity.
          </p>
        </div>

        {artworks.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif italic text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${section.title} artwork ${index + 1}`}
                    width={400}
                    height={300}
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
