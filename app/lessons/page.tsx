"use client";

import { useState, Suspense, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useInView } from "framer-motion";
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
    image: "/images/myaamia-lesson-img.jpg",
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
    image: "/images/marine-lesson-img.jpg",
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
    image: "/images/lesson-image.png",
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
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll animation
  const { scrollYProgress } = useScroll();

  // Refs for scroll animations
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isTabsInView = useInView(tabsRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
    <motion.div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-coral-500 dark:bg-coral-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll hint arrow */}
      <motion.div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 ${
          hasScrolled ? "opacity-0" : "opacity-100"
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: hasScrolled ? 0 : 1, y: hasScrolled ? -20 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-coral-600 dark:text-coral-400 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md backdrop-blur-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-32 right-10 w-24 h-24 rounded-full bg-pink-300/30 dark:bg-pink-800/20 z-0 backdrop-blur-md"
        animate={{
          y: [0, -15, 0],
          opacity: [0.7, 0.9, 0.7],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(244, 114, 182, 0.4)",
          boxShadow: "0 0 20px rgba(244, 114, 182, 0.3)",
        }}
      />

      {/* Square decoration */}
      <motion.div
        className="absolute top-[40vh] right-[30%] w-16 h-16 bg-coral-300/20 dark:bg-coral-700/20 z-0 backdrop-blur-sm"
        animate={{
          rotate: [0, 45, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.4,
          backgroundColor: "rgba(251, 113, 133, 0.4)",
          borderRadius: "30%",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-16 w-32 h-32 rounded-full bg-pink-200/30 dark:bg-pink-700/10 z-0 backdrop-blur-md"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        whileHover={{
          scale: 1.3,
          backgroundColor: "rgba(244, 114, 182, 0.35)",
        }}
      />

      {/* Triangle decoration */}
      <motion.div
        className="absolute top-[60vh] right-8 w-24 h-24 z-0"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background:
            "linear-gradient(45deg, rgba(244, 114, 182, 0.2), rgba(236, 72, 153, 0.1))",
          backdropFilter: "blur(8px)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.3,
          rotate: 180,
          filter: "hue-rotate(90deg)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          className="text-center mb-10"
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Art Lessons
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my comprehensive curriculum spanning elementary, junior, and high
            school levels.
          </motion.p>
        </motion.div>

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
          <motion.div
            className="mb-8"
            ref={tabsRef}
            initial="hidden"
            animate={isTabsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TabsList className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 grid w-full grid-cols-2 md:grid-cols-4 gap-3 mb-8 shadow-md">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger
                  value="lesson-plans"
                  className="dark:data-[state=active]:bg-coral-700 dark:data-[state=active]:text-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  Lesson Plans
                </TabsTrigger>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.05 }}
              >
                <TabsTrigger
                  value="elementary"
                  className="dark:data-[state=active]:bg-coral-700 dark:data-[state=active]:text-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  Elementary Art
                </TabsTrigger>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.1 }}
              >
                <TabsTrigger
                  value="junior"
                  className="dark:data-[state=active]:bg-coral-700 dark:data-[state=active]:text-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  Junior Art
                </TabsTrigger>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.15 }}
              >
                <TabsTrigger
                  value="high-school"
                  className="dark:data-[state=active]:bg-coral-700 dark:data-[state=active]:text-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  High School Art
                </TabsTrigger>
              </motion.div>
            </TabsList>
          </motion.div>

          {/* Animated Tab Contents with AnimatePresence for smooth transitions */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {/* Lesson Plans Tab Content */}
              <TabsContent value="lesson-plans" className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                  className="relative"
                  layoutId="tab-content-lesson-plans"
                >
                  <LessonPlans
                    lessonPlans={lessonPlans}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </motion.div>
              </TabsContent>

              {/* Elementary Art Tab Content */}
              <TabsContent value="elementary" className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                  className="relative"
                  layoutId="tab-content-elementary"
                >
                  <ElementaryArt activeTab={activeTab} openImageModal={openImageModal} />
                </motion.div>
              </TabsContent>

              {/* Junior Art Tab Content */}
              <TabsContent value="junior" className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                  className="relative"
                  layoutId="tab-content-junior"
                >
                  <JuniorArt activeTab={activeTab} openImageModal={openImageModal} />
                </motion.div>
              </TabsContent>

              {/* High School Art Tab Content */}
              <TabsContent value="high-school" className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                  className="relative"
                  layoutId="tab-content-high-school"
                >
                  <HighSchoolArt activeTab={activeTab} openImageModal={openImageModal} />
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </motion.div>
        </Tabs>
      </div>

      {/* Image Modal with sliding functionality */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ImageModal
              modalOpen={modalOpen}
              closeImageModal={closeImageModal}
              selectedImage={selectedImage}
              allImages={currentSectionImages}
              sectionTitle={currentSectionTitle}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
