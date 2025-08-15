import React from 'react';
import Link from 'next/link';
import { getBrandConfig } from '../config/brand';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const brand = getBrandConfig();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`${brand.colors.primary} shadow-lg`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl">{brand.logo}</span>
                <span className="text-xl font-bold text-white">{brand.name}</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/api" className="text-white hover:text-gray-200 transition-colors">
                API Reference
              </Link>
              <Link href="/tutorials" className="text-white hover:text-gray-200 transition-colors">
                Tutorials
              </Link>
              <Link href="/blog" className="text-white hover:text-gray-200 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2023 {brand.name}. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;