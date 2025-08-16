// components/TutorialCard.tsx
import React from 'react';
import Link from 'next/link';

interface Tutorial {
  title: string;
  description: string;
  slug: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  category: string;
  tags: string[];
  lastUpdated: string;
}

interface TutorialCardProps {
  tutorial: Tutorial;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial }) => {
  const getDifficultyColor = (difficulty: Tutorial['difficulty']) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link href={`/tutorials/${tutorial.slug}`} className="block p-6 h-full">
        <div className="flex justify-between items-start mb-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(
              tutorial.difficulty
            )}`}
          >
            {tutorial.difficulty}
          </span>
          <span className="text-sm text-gray-500">{tutorial.duration}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
          {tutorial.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {tutorial.description}
        </p>

        <div className="space-y-3">
          <div className="text-xs text-gray-500">Category: {tutorial.category}</div>

          <div className="flex flex-wrap gap-1">
            {tutorial.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
            {tutorial.tags.length > 3 && (
              <span className="text-xs text-gray-500">
                +{tutorial.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="text-xs text-gray-400">
            Updated: {new Date(tutorial.lastUpdated).toLocaleDateString()}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default TutorialCard;