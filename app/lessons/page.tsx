"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, FileText, Presentation, ImageIcon } from "lucide-react"
import Image from "next/image"

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
      { name: "Bingo Cards", type: "pdf", icon: ImageIcon },
    ],
    category: "Cultural Education",
    grade: "4th Grade",
  },
  {
    id: 2,
    title: "Marine Life Collaborative Mural",
    description: `In my Introduction to Elementary Art Methods class, my group and I developed a lesson inspired by an existing one that lacked depth. Our goal was to create a detailed and clear plan, ensuring it was both comprehensive and easy to follow. This collaborative mural project engages students in learning about marine ecosystems while developing artistic skills through large-scale collaborative artwork.`,
    image: "/images/marine-life.png",
    imageAlt: "Colorful marine life mural featuring whale, sea turtle, and ocean creatures",
    materials: [
      { name: "Complete Lesson Plan", type: "pdf", icon: FileText },
      { name: "Marine Life Reference Guide", type: "pdf", icon: FileText },
      { name: "Mural Planning Template", type: "pdf", icon: ImageIcon },
      { name: "Assessment Rubric", type: "pdf", icon: FileText },
      { name: "Student Worksheets", type: "pdf", icon: FileText },
    ],
    category: "Environmental Art",
    grade: "Elementary",
  },
  {
    id: 3,
    title: "Let’s Get Growing! ",
    description: `In my Introduction Art Methods class, my group and I designed a craft activity inspired by Emily Holt’s sculpture located at Miami University Art Museum on campus. Our goal was to create a lesson that encourages students to engage with art in a meaningful way while drawing inspiration from a prominent piece in our community.`,
    image: "/images/grow-up.png",
    imageAlt: "Get growing",
    materials: [
      { name: "Lesson Plan", type: "pdf", icon: FileText },
      { name: "Lesson Slides", type: "pdf", icon: FileText },
    ],
    category: "Environmental Art",
    grade: "Elementary",
  },
]









const getFileTypeColor = (type: string) => {
  switch (type) {
    case "pdf":
      return "text-red-600"
    case "presentation":
      return "text-orange-600"
    default:
      return "text-blue-600"
  }
}

export default function LessonPlansPage() {
  const handleDownload = (materialName: string) => {
    // In a real app, this would trigger the actual download
    alert(`Downloading: ${materialName}`)
  }

  const handleExternalLink = (url: string) => {
    // In a real app, this would open the external link
    alert("Opening external link...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Elementary Lesson Plans</h1>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-16">
          {lessonPlans.map((lesson, index) => (
            <Card key={lesson.id} className="overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
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
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {lesson.category}
                          </Badge>
                          <Badge variant="outline" className="border-gray-300">
                            {lesson.grade}
                          </Badge>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight">★ {lesson.title} ★</h2>
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
                            {lesson.moreInfoText.split("Miami Tribe's community blog")[0]}
                            <button
                              onClick={() => handleExternalLink("#")}
                              className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
                            >
                              Miami Tribe's community blog
                              <ExternalLink className="h-3 w-3" />
                            </button>
                            .
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
                              key={materialIndex}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                <material.icon className={`h-5 w-5 ${getFileTypeColor(material.type)}`} />
                                <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {material.name}
                                </span>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => handleDownload(material.name)}
                                className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
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
          ))}
        </div>

        {/* Footer Section */}
        {/* <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need More Resources?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                These lesson plans are part of ongoing educational partnerships. Contact us for additional materials or
                to discuss custom curriculum development.
              </p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Contact for More Resources
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  )
}
