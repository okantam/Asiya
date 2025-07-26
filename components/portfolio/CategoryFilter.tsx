"use client";
import React from "react";

interface CategoryFilterProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? "bg-coral-600 dark:bg-coral-700 text-white shadow-lg"
              : "bg-coral-50 dark:bg-gray-700 text-coffee dark:text-gray-200 hover:bg-coral-100 dark:hover:bg-gray-600 hover:text-coffee/80 dark:hover:text-white/90"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
