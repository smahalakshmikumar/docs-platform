import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Making a Payment with TypeScript',
      description: 'Learn how to integrate payment processing using TypeScript and Stripe',
      slug: 'payment-tutorial',
      difficulty: 'Intermediate',
      duration: '15 min read'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tutorials</h1>
          <p className="mt-2 text-gray-600">
            Step-by-step guides to help you build amazing applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.slug} href={`/tutorials/${tutorial.slug}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tutorial.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{tutorial.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tutorial.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 mb-53 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to contribute?</h2>
          <p className="text-gray-600 mb-4">
            We're always looking for new tutorials and guides. If you have an idea for a tutorial 
            or would like to contribute to our documentation, we'd love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default TutorialsPage;