import React from 'react';
import Link from 'next/link';
import { getBrandConfig } from '../config/brand';
import Layout from '@/components/Layout';

const HomePage: React.FC = () => {
  const brand = getBrandConfig();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to <span className={`text-${brand.theme}-600`}>{brand.name}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your comprehensive documentation platform for APIs, tutorials, and insights.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/api" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center p-3 ${brand.colors.primary} rounded-md shadow-lg mb-4`}>
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  API Reference
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Comprehensive API documentation with interactive examples and specifications.
                </p>
              </div>
            </Link>

            <Link href="/tutorials" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center p-3 ${brand.colors.secondary} rounded-md shadow-lg mb-4`}>
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  Tutorials
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Step-by-step guides and code examples to help you get started quickly.
                </p>
              </div>
            </Link>

            <Link href="/blog" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center p-3 ${brand.colors.accent} rounded-md shadow-lg mb-4`}>
                  <span className="text-white text-2xl">✍️</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  Blog
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Latest updates, best practices, and insights from our team.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-16 mb-12 bg-white rounded-lg shadow-md p-8">          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">For Developers</h3>
              <p className="text-sm text-gray-600">Check out our API documentation and code examples.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">For Beginners</h3>
              <p className="text-sm text-gray-600">Start with our comprehensive tutorials and guides.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;