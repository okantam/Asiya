import React from "react";

const PortfolioHeader: React.FC = () => {
  return (
    <section className="relative h-[400px] bg-gradient-to-br from-coral-300 to-pink-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
      <div className="relative z-10 text-center bg-soft-white/95 dark:bg-gray-800/95 p-8 rounded-lg max-w-3xl mx-4 border border-border dark:border-gray-700">
        <h1
          className="text-4xl md:text-5xl font-serif italic text-coral-600 dark:text-coral-400 mb-4"
          style={{ fontFamily: "sacramento,cursive" }}
        >
          Artwork Gallery
        </h1>
        <p className="text-lg text-coffee/80 dark:text-gray-300">
          Explore the creative journey of my work across different category and skill
          levels. Each piece represents growth, learning, and artistic expression.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHeader;
