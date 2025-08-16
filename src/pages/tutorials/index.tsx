// pages/tutorials/index.tsx
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import TutorialFilters from '../../components/TutorialFilters';
import TutorialCard from '../../components/TutorialCard';
import { getBrandConfig } from '../../config/brand';

// Move this to a separate file: types/tutorial.ts
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

// Move this to a separate file: data/tutorials.ts
const tutorials: Tutorial[] = [
  {
    title: 'Making a Payment with TypeScript',
    description: 'Learn how to integrate payment processing using TypeScript and Stripe with comprehensive error handling and best practices.',
    slug: 'payment-tutorial',
    difficulty: 'Intermediate',
    duration: '15 min read',
    category: 'Payment Integration',
    tags: ['TypeScript', 'Stripe', 'Payments', 'API'],
    lastUpdated: '2024-12-15'
  },
  {
    title: 'Getting Started with Our API',
    description: 'A comprehensive introduction to our API endpoints, authentication, and basic usage patterns.',
    slug: 'api-quickstart',
    difficulty: 'Beginner',
    duration: '10 min read',
    category: 'API Basics',
    tags: ['API', 'Authentication', 'REST'],
    lastUpdated: '2024-12-10'
  },
  {
    title: 'Advanced Error Handling Patterns',
    description: 'Master advanced error handling techniques for robust applications with real-world examples.',
    slug: 'error-handling',
    difficulty: 'Advanced',
    duration: '20 min read',
    category: 'Best Practices',
    tags: ['Error Handling', 'TypeScript', 'Architecture'],
    lastUpdated: '2024-12-08'
  }
];

const TutorialsPage: React.FC = () => {
  const brand = getBrandConfig();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(tutorials.map(t => t.category)))];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || tutorial.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tutorials</h1>
          <p className="mt-2 text-gray-600">
            Step-by-step guides to help you build amazing applications with {brand.name}.
          </p>
        </div>

        {/* Filters */}
        <TutorialFilters
          categories={categories}
          difficulties={difficulties}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          onCategoryChange={setSelectedCategory}
          onDifficultyChange={setSelectedDifficulty}
        />

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredTutorials.length} of {tutorials.length} tutorials
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.slug} tutorial={tutorial} />
          ))}
        </div>

        {/* Empty State */}
        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tutorials found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or check back later for new content.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 mb-8 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to contribute?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for new tutorials and guides. If you have expertise to share
              or would like to contribute to our documentation, we'd love to collaborate with you.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Contribute a Tutorial
              </button>
              <button className="w-full sm:w-auto bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors">
                Suggest a Topic
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorialsPage;