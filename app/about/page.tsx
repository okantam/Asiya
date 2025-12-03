"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };

    // Mouse position tracking for subtle interactive effects
    const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent> | MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // References for scroll animations
  const bioRef = useRef(null);
  const experienceRef = useRef(null);
  const approachRef = useRef(null);
  const philosophyRef = useRef(null);

  // Check if elements are in view
  const isBioInView = useInView(bioRef, { once: true, amount: 0.3 });
  const isExperienceInView = useInView(experienceRef, { once: true, amount: 0.3 });
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.3 });
  const isPhilosophyInView = useInView(philosophyRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Use state for mouse-based animation instead of complex transforms
  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Subtle mouse-follow spotlight effect */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-pink-300/10 dark:bg-pink-500/10 blur-3xl"
        animate={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "soft-light",
        }}
      />

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

      {/* Decorative floating elements with parallax effect */}
      <motion.div
        className="absolute top-32 right-10 w-24 h-24 rounded-full bg-pink-300/20 dark:bg-pink-800/10 z-0 backdrop-blur-md"
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
        style={{
          translateX: useMotionTemplate`${useTransform(
            scrollYProgress,
            [0, 1],
            [0, -50]
          )}px`,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(244, 114, 182, 0.3)",
        }}
      />
      <motion.div
        className="absolute top-80 left-16 w-32 h-32 rounded-full bg-pink-200/30 dark:bg-pink-700/10 z-0 backdrop-blur-md"
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
        style={{
          translateX: useMotionTemplate`${useTransform(
            scrollYProgress,
            [0, 1],
            [0, 60]
          )}px`,
        }}
        whileHover={{
          scale: 1.3,
          backgroundColor: "rgba(244, 114, 182, 0.35)",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-40 h-40 rounded-full bg-pink-100/20 dark:bg-pink-900/10 z-0 backdrop-blur-md"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          translateX: useMotionTemplate`${useTransform(
            scrollYProgress,
            [0, 1],
            [0, -80]
          )}px`,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(244, 114, 182, 0.3)",
          borderRadius: "40% 60% 60% 40% / 40% 50% 50% 60%",
        }}
      />

      {/* Additional decorative element - triangle shape */}
      <motion.div
        className="absolute top-[60vh] left-10 w-24 h-24 z-0"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background:
            "linear-gradient(45deg, rgba(244, 114, 182, 0.2), rgba(236, 72, 153, 0.1))",
          translateY: useMotionTemplate`${useTransform(
            scrollYProgress,
            [0, 1],
            [0, 100]
          )}px`,
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

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-pink-200 to-pink-100 dark:from-gray-800/90 dark:to-gray-800/90 rounded-lg shadow-lg overflow-hidden border border-border dark:border-gray-700"
          >
            <div className="flex flex-col lg:flex-row">
              <motion.div
                className="lg:w-1/3 overflow-hidden relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Profile image overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/30 dark:to-pink-700/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  whileHover={{ opacity: 1 }}
                />

                {/* Image */}
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  <Image
                    src="/images/new_about-profile.webp"
                    alt="Asiya Kinebrew Profile"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="lg:w-2/3 p-8 my-auto"
                ref={bioRef}
                initial="hidden"
                animate={isBioInView ? "visible" : "hidden"}
                variants={staggerItems}
              >
                <motion.div
                  className="mb-8"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.blockquote
                    className="text-lg italic text-foreground dark:text-gray-200 mb-4 text-center border-l-4 border-pink-300 dark:border-pink-700 pl-4 py-2 bg-pink-50 dark:bg-gray-800 rounded shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(249, 168, 212, 0.25)",
                      borderLeftWidth: "6px",
                    }}
                  >
                    {/* Animated highlight effect */}
                    <motion.div
                      className="absolute inset-0 bg-pink-200/10 dark:bg-pink-400/10"
                      initial={{ x: "-100%" }}
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatDelay: 8,
                      }}
                    />

                    {/* Quote content */}
                    <div className="relative z-10">
                      "Art has the role in education of helping children become like
                      themselves instead of more like everyone else." —{" "}
                      <motion.span
                        className="font-semibold relative inline-block"
                        whileHover={{ color: "#EC4899" }}
                      >
                        Sydney Gurewitz Clemens
                      </motion.span>
                    </div>
                  </motion.blockquote>
                </motion.div>
                <motion.p
                  className="text-foreground dark:text-gray-200 mb-6 leading-relaxed"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Hi, I'm Asiya - an artist, educator, and Visionary
                </motion.p>{" "}
                <motion.p
                  className="text-foreground dark:text-gray-200 mb-6 leading-relaxed"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  My work lives at the intersection of creativity, care, and
                  self-discovery. Whether I'm in the studio or the classroom, I believe
                  art is more than just a product - it's a process of healing, reflection,
                  and connection. Through mindful teaching and expressive practice, I help
                  students not only build skills but also tune into their inner voice,
                  their history, and their sense of wonder….
                </motion.p>
                <motion.p
                  className="text-foreground dark:text-gray-200 mb-6 leading-relaxed"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  I'm passionate about creating spaces where every student feels seen,
                  valued, and free to explore, as well as express what words sometimes
                  can't. In my classroom my approach blends traditional art techniques
                  with intuitive making, storytelling, and holistic learning. Here, we
                  honor both the mess and the magic. Let's create, grow, and imagine new
                  possibilities - together!
                </motion.p>
                <motion.p
                  className="text-foreground dark:text-gray-200 mb-6 leading-relaxed"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                  Through process-based, reflective learning, I guide young artists to
                  explore their identities, tap into their intuition, and express what
                  words sometimes can't. In my classroom, we embrace exploration, make
                  space for feelings, and create with care.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            ref={experienceRef}
            initial={{ opacity: 0 }}
            animate={isExperienceInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 flex items-center relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ textShadow: "0 0 8px rgba(244, 114, 182, 0.6)" }}
            >
              <motion.span
                className="mr-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isExperienceInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                🎓
              </motion.span>
              My Background & Experience
            </motion.h2>
            <motion.p
              className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a Pre-Service Art Teacher at Miami University of Ohio, pursuing a degree
              in Art Education.
            </motion.p>
            <motion.p
              className="text-muted-foreground dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isExperienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My background includes collaborative lesson planning, culturally responsive
              teaching, hands-on craft facilitation, and continued exploration of
              inclusive, community-based art practices.
            </motion.p>
          </motion.div>
          <motion.div
            className="mb-12"
            ref={approachRef}
            initial={{ opacity: 0 }}
            animate={isApproachInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 flex items-center relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ textShadow: "0 0 8px rgba(244, 114, 182, 0.6)" }}
            >
              <motion.span
                className="mr-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isApproachInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                🎨
              </motion.span>
              My Approach to Teaching Art
            </motion.h2>
            <motion.p
              className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm passionate about using art as a vehicle for learning, empowerment, and
              expression.
              <br />
              My work centers on:
            </motion.p>
            <motion.ul
              className="list-disc list-inside pl-5 text-muted-foreground dark:text-gray-300 space-y-2 mb-4"
              initial={{ opacity: 0 }}
              animate={isApproachInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isApproachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Teaching art with purpose
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isApproachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                Designing inclusive and engaging curriculum
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isApproachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Advocating creatively for social and educational change
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={isApproachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                Empowering students through intentional, expressive experiences
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-muted-foreground dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Whether exploring painting, mixed media, ceramics, printmaking, or digital
              art, I aim to foster a creative space that's welcoming, inclusive, and full
              of encouragement where students feel confident to take artistic risks and
              evolve through the creative journey.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-pink-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-pink-100 dark:border-gray-700 relative overflow-hidden group"
            ref={philosophyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              boxShadow:
                "0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.07)",
              y: -8,
            }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-100/0 via-pink-200/20 to-pink-100/0 dark:from-gray-800/0 dark:via-pink-800/10 dark:to-gray-800/0"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
              style={{
                opacity: 0,
                scaleX: 1.5,
              }}
              whileHover={{
                opacity: 1,
              }}
            />
            <motion.h2
              className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4 flex items-center relative group"
              initial={{ opacity: 0 }}
              animate={isPhilosophyInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ textShadow: "0 0 8px rgba(244, 114, 182, 0.6)" }}
            >
              <motion.span
                className="mr-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isPhilosophyInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              >
                📚
              </motion.span>
              My Teaching Philosophy
            </motion.h2>

            <motion.a
              href="https://docs.google.com/document/d/1FjWNguA60g2dS67Y7MswOywLRwBy5GAXBqOo6ALfRI8/edit?usp=drivesdk"
              target="_blank"
              className="inline-flex items-center text-coral-600 hover:text-coral-700 dark:text-coral-400 dark:hover:text-coral-300 underline underline-offset-2"
              initial={{ opacity: 0 }}
              animate={isPhilosophyInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Read about my teaching philosophy
              <motion.svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  repeatDelay: 2,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </motion.svg>
            </motion.a>
            <motion.div
              className="mt-6 p-4 rounded-lg bg-pink-100 dark:bg-gray-700 border border-pink-200 dark:border-gray-600 shadow-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={isPhilosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.01, backgroundColor: "rgba(255, 192, 203, 0.2)" }}
            >
              <motion.h3
                className="text-xl font-bold text-foreground dark:text-gray-100 mb-3 flex items-center"
                initial={{ opacity: 0 }}
                animate={isPhilosophyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.span className="mr-2 text-pink-600 dark:text-pink-400">
                  📄
                </motion.span>
                Professional Resume
              </motion.h3>

              <motion.a
                // This links to the PDF file in your public folder
                href="/Asiya Kinebrew's Resume.pdf"
                target="_blank"
                className="inline-flex items-center text-coral-600 hover:text-coral-700 dark:text-coral-400 dark:hover:text-coral-300 underline underline-offset-2"
                initial={{ opacity: 0 }}
                animate={isPhilosophyInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                View my Resume
                <motion.svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
