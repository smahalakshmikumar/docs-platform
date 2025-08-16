// components/TutorialFilters.tsx
import React from 'react';

interface TutorialFiltersProps {
  categories: string[];
  difficulties: string[];
  selectedCategory: string;
  selectedDifficulty: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

const TutorialFilters: React.FC<TutorialFiltersProps> = ({
  categories,
  difficulties,
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange,
}) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="category-filter" className="sr-only">
          Filter by category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          aria-label="Filter tutorials by category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'All' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="difficulty-filter" className="sr-only">
          Filter by difficulty
        </label>
        <select
          id="difficulty-filter"
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          aria-label="Filter tutorials by difficulty"
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty === 'All' ? 'All Levels' : difficulty}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TutorialFilters;