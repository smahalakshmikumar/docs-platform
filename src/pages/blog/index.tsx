import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: 'The Importance of Creating Great Documentation Experiences',
      excerpt: 'Good documentation is essential for any product, service, or project. It helps users understand how to use a product or service, troubleshoot issues, and learn new skills.',
      author: 'ChatGPT',
      date: '2023-05-02',
      slug: 'great-doc-experience',
      tags: ['documentation', 'user experience', 'best practices']
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="mt-2 text-gray-600">
            Latest insights, updates, and best practices from our team.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-3">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* //TO DO:improvements for future */}
        <div className="mt-12 mb-40 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates, tutorials, and insights delivered to your inbox.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;