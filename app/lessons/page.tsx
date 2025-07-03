"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  FileText,
  Presentation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const lessonPlans = [
  {
    id: 1,
    title: "Myaamia Arts and Culture Education Partnership",
    description: `I served as a teacher in a program where Miami University Art Education students collaborate with Miami Tribe of Oklahoma citizens from the Myaamia Center to develop a curriculum which I then taught in area public elementary schools. This project allows the Art Education program to address gaps in Ohio state arts, science, and history learning standards, which rank especially low nationwide for inclusion of Indigenous culture, particularly contemporary Indigenous culture. Under the mentorship of Myaamia scholars and as part of a teaching team, I developed a two-lesson unit focusing on Myaamia history, language, and contemporary arts and culture, and taught them to students in an Oxford, OH and Middle Town fourth-grade classroom.`,
    additionalInfo: `Because the lesson plans contain sensitive cultural information, I am not sharing them directly in this portfolio; however, I have included approved images of this work.`,
    moreInfoText: `More information on this collaboration can be found on the Miami Tribe's community blog.`,
    image: "/images/culture-education.png",
    imageAlt: "Traditional Myaamia geometric pattern artwork in red, white, and black",
    materials: [
      { name: "Lesson Plan (History)", type: "pdf", icon: FileText },
      { name: "Activity Lesson Plan", type: "pdf", icon: FileText },
      { name: "Bingo Activity Plan", type: "pdf", icon: FileText },
      { name: "Bingo Activity Slideshow", type: "presentation", icon: Presentation },
    ],
    category: "Elementary",
    type: "elementary",
    grade: "4th Grade",
  },
  {
    id: 2,
    title: " Education Partnership",
    description: `I served as a teacher in a program where Miami University Art Education students collaborate with Miami Tribe of Oklahoma citizens from the Myaamia Center to develop a curriculum which I then taught in area public elementary schools. This project allows the Art Education program to address gaps in Ohio state arts, science, and history learning standards, which rank especially low nationwide for inclusion of Indigenous culture, particularly contemporary Indigenous culture. Under the mentorship of Myaamia scholars and as part of a teaching team, I developed a two-lesson unit focusing on Myaamia history, language, and contemporary arts and culture, and taught them to students in an Oxford, OH and Middle Town fourth-grade classroom.`,
    additionalInfo: `Because the lesson plans contain sensitive cultural information, I am not sharing them directly in this portfolio; however, I have included approved images of this work.`,
    moreInfoText: `More information on this collaboration can be found on the Miami Tribe's community blog.`,
    image: "/images/paint-brash.jpg",
    imageAlt: "Traditional Myaamia geometric pattern artwork in red, white, and black",
    materials: [
      { name: "Lesson Plan (History)", type: "pdf", icon: FileText },
      { name: "Activity Lesson Plan", type: "pdf", icon: FileText },
      { name: "Bingo Activity Plan", type: "pdf", icon: FileText },
      { name: "Bingo Activity Slideshow", type: "presentation", icon: Presentation },
    ],
    category: "Elementary",
    type: "elementary",
    grade: "4th Grade",
  },
  {
    id: 3,
    title: "Culture Education",
    description: `I served as a teacher in a program where Miami University Art Education students collaborate with Miami Tribe of Oklahoma citizens from the Myaamia Center to develop a curriculum which I then taught in area public elementary schools. This project allows the Art Education program to address gaps in Ohio state arts, science, and history learning standards, which rank especially low nationwide for inclusion of Indigenous culture, particularly contemporary Indigenous culture. Under the mentorship of Myaamia scholars and as part of a teaching team, I developed a two-lesson unit focusing on Myaamia history, language, and contemporary arts and culture, and taught them to students in an Oxford, OH and Middle Town fourth-grade classroom.`,
    additionalInfo: `Because the lesson plans contain sensitive cultural information, I am not sharing them directly in this portfolio; however, I have included approved images of this work.`,
    moreInfoText: `More information on this collaboration can be found on the Miami Tribe's community blog.`,
    image: "/images/culture-education.png",
    imageAlt: "Traditional Myaamia geometric pattern artwork in red, white, and black",
    materials: [
      { name: "Lesson Plan (History)", type: "pdf", icon: FileText },
      { name: "Activity Lesson Plan", type: "pdf", icon: FileText },
      { name: "Bingo Activity Plan", type: "pdf", icon: FileText },
      { name: "Bingo Activity Slideshow", type: "presentation", icon: Presentation },
    ],
    category: "Elementary",

    type: "elementary",
    grade: "4th Grade",
  },
  // {
  //   id: 4,
  //   title: "Marine Life Collaborative Mural",
  //   description: `In my Introduction to Elementary Art Methods class, my group and I developed a lesson inspired by an existing one that lacked depth. Our goal was to create a detailed and clear plan, ensuring it was both comprehensive and easy to follow. This collaborative mural project engages students in learning about marine ecosystems while developing artistic skills through large-scale collaborative artwork.`,
  //   image: "/images/marine-life.png",
  //   imageAlt:
  //     "Colorful marine life mural featuring whale, sea turtle, and ocean creatures",
  //   materials: [{ name: "Lesson Plan", type: "pdf", icon: FileText }],
  //   category: "Junior High",
  //   type: "junior",
  //   grade: "6th Grade",
  // },
  {
    id: 5,
    title: "Let’s Get Growing! ",
    description: `In my Introduction Art Methods class, my group and I designed a craft activity inspired by Emily Holt’s sculpture located at Miami University Art Museum on campus. Our goal was to create a lesson that encourages students to engage with art in a meaningful way while drawing inspiration from a prominent piece in our community.`,
    image: "/images/grow-up.png",
    imageAlt: "Get growing",
    materials: [
      { name: "Lesson Plan", type: "pdf", icon: FileText },
      { name: "Lesson Slides", type: "pdf", icon: FileText },
    ],
    category: "Junior High",
    type: "elementary",
    grade: "Elementary",
  },
  // {
  //   id: 6,
  //   title: "Let’s Get Growing! ",
  //   description: `In my Introduction Art Methods class, my group and I designed a craft activity inspired by Emily Holt’s sculpture located at Miami University Art Museum on campus. Our goal was to create a lesson that encourages students to engage with art in a meaningful way while drawing inspiration from a prominent piece in our community.`,
  //   image: "/images/grow-up.png",
  //   imageAlt: "Get growing",
  //   materials: [
  //     { name: "Lesson Plan", type: "pdf", icon: FileText },
  //     { name: "Lesson Slides", type: "pdf", icon: FileText },
  //   ],
  //   category: "Junior High",
  //   type: "junior",
  //   grade: "Elementary",
  // },
  // {
  //   id: 7,
  //   title: "Let’s Get Growing! ",
  //   description: `In my Introduction Art Methods class, my group and I designed a craft activity inspired by Emily Holt’s sculpture located at Miami University Art Museum on campus. Our goal was to create a lesson that encourages students to engage with art in a meaningful way while drawing inspiration from a prominent piece in our community.`,
  //   image: "/images/grow-up.png",
  //   imageAlt: "Get growing",
  //   materials: [
  //     { name: "Lesson Plan", type: "pdf", icon: FileText },
  //     { name: "Lesson Slides", type: "pdf", icon: FileText },
  //   ],
  //   category: "High School",
  //   type: "high",
  //   grade: "Elementary",
  // },
  // {
  //   id: 8,
  //   title: "Let’s Get Growing! ",
  //   description: `In my Introduction Art Methods class, my group and I designed a craft activity inspired by Emily Holt’s sculpture located at Miami University Art Museum on campus. Our goal was to create a lesson that encourages students to engage with art in a meaningful way while drawing inspiration from a prominent piece in our community.`,
  //   image: "/images/grow-up.png",
  //   imageAlt: "Get growing",
  //   materials: [
  //     { name: "Lesson Plan", type: "pdf", icon: FileText },
  //     { name: "Lesson Slides", type: "pdf", icon: FileText },
  //   ],
  //   category: "High School",
  //   type: "high",
  //   grade: "Elementary",
  // },
];

const categories = [
  { id: "elementary", name: "Elementary" },
  { id: "junior", name: "Junior High" },
  { id: "high", name: "High School" },
];

const getFileTypeColor = (type: string) => {
  switch (type) {
    case "pdf":
      return "text-red-600";
    case "presentation":
      return "text-orange-600";
    default:
      return "text-blue-600";
  }
};

// Client component that uses searchParams
function TabSelector({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const searchParams = useSearchParams();

  // Set active tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (
      tabParam &&
      ["lesson-plans", "elementary", "junior", "high-school"].includes(tabParam)
    ) {
      setActiveTab(tabParam);
    }
  }, [searchParams, setActiveTab]);

  return null;
}

export default function LessonPlansPage() {
  const [selectedCategory, setSelectedCategory] = useState("elementary");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("lesson-plans");

  // Elementary art images
  const kindergartenImages = [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
  ];

  const gradesImages = [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
  ];

  // Junior art section data (previously "Middle School Art")
  const juniorArtworks = [
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
  ];

  // High School art section data
  const highSchoolPortfolioSections = [
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

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % gradesImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + gradesImages.length) % gradesImages.length);
  };

  const handleDownload = (materialName: string) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading: ${materialName}`);
  };

  const handleExternalLink = (url: string) => {
    // In a real app, this would open the external link
    window.open(url, "_blank");
  };

  // Filter lesson plans based on selected category
  const filteredLessons = lessonPlans.filter(lesson => lesson.type === selectedCategory);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Art Lessons</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my comprehensive curriculum spanning elementary, junior, and high
            school levels.
          </p>
        </div>

        {/* Use Suspense boundary for the search params component */}
        <Suspense fallback={<Skeleton className="w-full h-10 rounded-lg" />}>
          <TabSelector setActiveTab={setActiveTab} />
        </Suspense>

        <Tabs
          value={activeTab}
          defaultValue="lesson-plans"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="lesson-plans">Lesson Plans</TabsTrigger>
            <TabsTrigger value="elementary">Elementary Art</TabsTrigger>
            <TabsTrigger value="junior">Junior Art</TabsTrigger>
            <TabsTrigger value="high-school">High School Art</TabsTrigger>
          </TabsList>

          {/* Lesson Plans Tab Content */}
          <TabsContent value="lesson-plans">
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md transition-all ${
                      selectedCategory === category.id
                        ? "bg-dusty-rose text-white font-medium shadow-md"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="space-y-10">
                {filteredLessons.length > 0 ? (
                  filteredLessons.map(lesson => (
                    <Card
                      key={lesson.id}
                      className="overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm"
                    >
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* Image Section */}
                          <div className="relative">
                            <div className="aspect-[4/3] relative rounded-md overflow-hidden">
                              <Image
                                src={lesson.image || "/placeholder.svg"}
                                alt={lesson.imageAlt}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="space-y-6">
                              {/* Header */}
                              <div className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                  <Badge
                                    variant="secondary"
                                    className="bg-pink-50 text-pink-400 hover:bg-pink-200"
                                  >
                                    {lesson.category}
                                  </Badge>
                                  <Badge variant="outline" className="border-gray-300">
                                    {lesson.grade}
                                  </Badge>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                                  {lesson.title}
                                </h2>
                              </div>

                              {/* Description */}
                              <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>{lesson.description}</p>
                                {lesson.additionalInfo && (
                                  <p className="text-sm italic text-gray-600 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                                    {lesson.additionalInfo}
                                  </p>
                                )}
                                {lesson.moreInfoText && (
                                  <p className="text-sm">
                                    {lesson.moreInfoText.includes(
                                      "Miami Tribe's community blog"
                                    ) ? (
                                      <>
                                        {" "}
                                        {
                                          lesson.moreInfoText.split(
                                            "Miami Tribe's community blog"
                                          )[0]
                                        }
                                        <button
                                          onClick={() =>
                                            handleExternalLink("https://example.com")
                                          }
                                          className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
                                        >
                                          Miami Tribe&apos;s community blog
                                          <ExternalLink className="h-3 w-3 ml-1" />
                                        </button>
                                        .
                                      </>
                                    ) : (
                                      <>
                                        <span>{lesson.moreInfoText}</span>
                                        <ExternalLink className="w-4 h-4 inline ml-1" />
                                      </>
                                    )}
                                  </p>
                                )}
                              </div>

                              {/* Materials */}
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                  Available Materials
                                </h3>
                                <div className="grid gap-3">
                                  {lesson.materials.map((material, materialIndex) => (
                                    <div
                                      key={`material-${lesson.id}-${material.name}-${materialIndex}`}
                                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                                    >
                                      <div className="flex items-center gap-3">
                                        <material.icon
                                          className={`h-5 w-5 ${getFileTypeColor(
                                            material.type
                                          )}`}
                                        />
                                        <span className="font-medium text-gray-900 group-hover:text-pink-400 transition-colors">
                                          {material.name}
                                        </span>
                                      </div>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleDownload(material.name)}
                                        className="border-2 border-dusty-rose text-dusty-rose hover:text-white hover:bg-dusty-rose shadow-sm"
                                      >
                                        <Download className="h-4 w-4 mr-2" />
                                        Download
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="max-w-md mx-auto">
                      <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-xl font-medium text-gray-900 mb-2">
                        No lessons available
                      </h3>
                      <p className="text-gray-600">
                        There are currently no lesson plans available for this category.
                        Please check back later or select a different category.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Elementary Art Tab Content */}
          <TabsContent value="elementary">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Elementary Art</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Students explore colors, shapes, and textures, building creative
                  foundations through play and curiosity.
                </p>
              </div>

              {/* Kindergarten Art Images */}
              <section className="mb-16">
                <h3 className="text-2xl font-serif italic text-center text-gray-800 mb-8">
                  Kindergarten Art
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {kindergartenImages.map(image => (
                    <div
                      key={image}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt="Kindergarten artwork"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Grades 1,2,3 Art Images */}
              <section>
                <h3 className="text-2xl font-serif italic text-center text-gray-800 mb-8">
                  Grades 1-3 Art
                </h3>
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
                    {gradesImages.map((img, index) => (
                      <button
                        key={`${img}-${index}`}
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
          </TabsContent>

          {/* Junior Art Tab Content */}
          <TabsContent value="junior">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Junior Art</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Growing artists experiment with techniques, materials, and
                  self-expression, gaining confidence and creativity.
                </p>
              </div>

              {juniorArtworks.map((section, sectionIndex) => (
                <section
                  key={`junior-section-${section.title}-${sectionIndex}`}
                  className="mb-16"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.images.map((image, index) => (
                      <div
                        key={`junior-img-${section.title}-${index}`}
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
          </TabsContent>

          {/* High School Art Tab Content */}
          <TabsContent value="high-school">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">High School Art</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Advanced students refine their skills, explore personal themes, and
                  blend traditional and digital techniques.
                </p>
              </div>

              {highSchoolPortfolioSections.map((section, sectionIndex) => (
                <section
                  key={`hs-section-${section.title}-${sectionIndex}`}
                  className="mb-16"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-serif italic text-gray-800 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {section.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {section.images.map((image, index) => (
                      <div
                        key={`hs-img-${section.title}-${index}`}
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
