"use client";

import { useState, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Presentation } from "lucide-react";
import { LessonPlan } from "@/types/lesson";

// Import our modular components
import ElementaryArt from "@/components/lessons/ElementaryArt";
import JuniorArt from "@/components/lessons/JuniorArt";
import HighSchoolArt from "@/components/lessons/HighSchoolArt";
import LessonPlans from "@/components/lessons/LessonPlans";
import ImageModal from "@/components/lessons/ImageModal";
import TabSelector from "@/components/lessons/TabSelector";

const lessonPlans: LessonPlan[] = [
  {
    id: 1,
    title: "Myaamia Arts and Culture Education Partnership",
    description: `I served as a teacher in a program where Miami University Art Education students collaborate with Miami Tribe of Oklahoma citizens from the Myaamia Center to develop a curriculum which I then taught in area public elementary schools. This project allows the Art Education program to address gaps in Ohio state arts, science, and history learning standards, which rank especially low nationwide for inclusion of Indigenous culture, particularly contemporary Indigenous culture. Under the mentorship of Myaamia scholars and as part of a teaching team, I developed a two-lesson unit focusing on Myaamia history, language, and contemporary arts and culture, and taught them to students in an Oxford, OH and Middle Town fourth-grade classroom.`,
    additionalInfo: `Because the lesson plans contain sensitive cultural information, I am not sharing them directly in this portfolio; however, I have included approved images of this work.`,
    moreInfoText: `More information on this collaboration can be found on the Miami Tribe's community blog.`,
    image: "/images/culture-education.png",
    imageAlt: "Traditional Myaamia geometric pattern artwork in red, white, and black",
    materials: [
      {
        name: "Lesson Plan (History)",
        type: "pdf",
        icon: FileText,
        path: "/documents/lesson_plan.pdf",
      },
      {
        name: "Activity Lesson Plan",
        type: "pdf",
        icon: FileText,
        path: "/documents/activity_lesson_plan.pdf",
      },
      {
        name: "Bingo Activity Plan",
        type: "pdf",
        icon: FileText,
        path: "/documents/Bingo-activity-plan.pdf",
      },
      {
        name: "Bingo Activity Slideshow",
        type: "presentation",
        icon: Presentation,
        path: "/documents/Asiya-Rachel-Myaamia-English.pptx",
      },
    ],
    category: "Elementary",
    type: "elementary",
    grade: "4th Grade",
  },
  {
    id: 2,
    title: "Marine Life Collaborative Mural",
    description: `In my Introduction to Elementary Art Methods class, my group and I developed a lesson inspired by an existing one that lacked depth. Our goal was to create a detailed and clear plan, ensuring it was both comprehensive and easy to follow.`,
    image: "/images/marine-life.avif",
    imageAlt: "Traditional Myaamia geometric pattern artwork in red, white, and black",
    materials: [
      {
        name: "Lesson Plan",
        type: "pdf",
        icon: FileText,
        path: "/documents/Marine Life lesson.pdf",
      },
    ],
    category: "Elementary",
    type: "elementary",
    grade: "4th Grade",
  },
  {
    id: 5,
    title: "Let's Get Growing! ",
    description: `In my Introduction Art Methods class, my group and I designed a craft activity inspired by Emily Holt's sculpture located at Miami University Art Museum on campus. Our goal was to create a lesson that encourages students to engage with art in a meaningful way while drawing inspiration from a prominent piece in our community.`,
    image: "/images/grow-up.png",
    imageAlt: "Get growing",
    materials: [
      {
        name: "Lesson Plan",
        type: "pdf",
        icon: FileText,
        path: "/documents/let-grow-lesson.pdf",
      },
      {
        name: "Lesson Slides",
        type: "pdf",
        icon: FileText,
        path: "/documents/lets-get-growing-slides.pdf",
      },
    ],
    category: "Elementary",
    type: "elementary",
    grade: "Elementary",
  },
];

const categories = [
  { id: "elementary", name: "Elementary" },
  { id: "junior", name: "Junior High" },
  { id: "high", name: "High School" },
];

export default function LessonPlansPage() {
  const [selectedCategory, setSelectedCategory] = useState("elementary");
  const [activeTab, setActiveTab] = useState("lesson-plans");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSectionImages, setCurrentSectionImages] = useState<string[]>([]);
  const [currentSectionTitle, setCurrentSectionTitle] = useState<string>("");

  // Modal functions
  const openImageModal = (
    imageSrc: string,
    images: string[] = [],
    sectionTitle: string = ""
  ) => {
    setSelectedImage(imageSrc);
    setCurrentSectionImages(images);
    setCurrentSectionTitle(sectionTitle);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    setCurrentSectionImages([]);
    setCurrentSectionTitle("");
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 to-pink-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Art Lessons</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my comprehensive curriculum spanning elementary, junior, and high
            school levels.
          </p>
        </div>

        {/* Use TabSelector to set tab based on URL parameters */}
        <Suspense fallback={null}>
          <TabSelector setActiveTab={setActiveTab} />
        </Suspense>

        <Tabs
          value={activeTab}
          defaultValue="lesson-plans"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="mb-8">
            <TabsList className="bg-gradient-to-br from-pink-50 to-pink-100 grid w-full  grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <TabsTrigger value="lesson-plans">Lesson Plans</TabsTrigger>
              <TabsTrigger value="elementary">Elementary Art</TabsTrigger>
              <TabsTrigger value="junior">Junior Art</TabsTrigger>
              <TabsTrigger value="high-school">High School Art</TabsTrigger>
            </TabsList>
          </div>

          {/* Lesson Plans Tab Content */}
          <TabsContent value="lesson-plans">
            <LessonPlans
              lessonPlans={lessonPlans}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </TabsContent>

          {/* Elementary Art Tab Content */}
          <TabsContent value="elementary">
            <ElementaryArt activeTab={activeTab} openImageModal={openImageModal} />
          </TabsContent>

          {/* Junior Art Tab Content */}
          <TabsContent value="junior">
            <JuniorArt activeTab={activeTab} openImageModal={openImageModal} />
          </TabsContent>

          {/* High School Art Tab Content */}
          <TabsContent value="high-school">
            <HighSchoolArt activeTab={activeTab} openImageModal={openImageModal} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Image Modal with sliding functionality */}
      <ImageModal
        modalOpen={modalOpen}
        closeImageModal={closeImageModal}
        selectedImage={selectedImage}
        allImages={currentSectionImages}
        sectionTitle={currentSectionTitle}
      />
    </div>
  );
}
