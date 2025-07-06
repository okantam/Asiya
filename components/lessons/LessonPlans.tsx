"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LessonPlan } from "@/types/lesson";

interface LessonPlansProps {
  lessonPlans: ReadonlyArray<LessonPlan>;
  categories: ReadonlyArray<{ id: string; name: string }>;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function LessonPlans({
  lessonPlans,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Readonly<LessonPlansProps>) {
  // Add utility function for file type color
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

  // Filter lesson plans based on selected category
  const filteredLessons = lessonPlans.filter(lesson => lesson.type === selectedCategory);

  const handleDownload = (materialName: string) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading: ${materialName}`);
  };

  const handleExternalLink = (url: string) => {
    // In a real app, this would open the external link
    window.open(url, "_blank");
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-md transition-all ${
              selectedCategory === category.id
                ? "bg-coral-600 text-white font-medium shadow-md"
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
                            className="bg-coral-50 text-coral-600 hover:bg-coral-100 hover:text-coral-700"
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
                                </button>{" "}
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
                                  className={`h-5 w-5 ${getFileTypeColor(material.type)}`}
                                />
                                <span className="font-medium text-gray-900 group-hover:text-coral-600 transition-colors">
                                  {material.name}
                                </span>
                              </div>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDownload(material.name)}
                                className="border-2 border-coral-600 text-coral-600 hover:text-white hover:bg-coral-600 shadow-sm"
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
          <div className="text-center py-16 bg-pink-50 rounded-lg border border-pink-200">
            <div className="max-w-md mx-auto">
              <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No lessons available
              </h3>
              <p className="text-gray-600">
                There are currently no lesson plans available for this category. Please
                check back later or select a different category.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
