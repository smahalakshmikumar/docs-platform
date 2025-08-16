// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getBrandConfig } from "../config/brand";

const Header: React.FC = () => {
  const brand = getBrandConfig();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActivePath = (path: string) => router.pathname.startsWith(path);

  const navItems = [
    { href: "/api", label: "API Reference" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className={`${brand.colors.primary} shadow-lg`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-md p-1"
              aria-label={`${brand.name} Home`}
            >
              <span className="text-2xl" role="img" aria-label="Logo">
                {brand.logo}
              </span>
              <span className="text-xl font-bold text-white">
                {brand.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 ${
                  isActivePath(item.href)
                    ? "text-yellow-200 bg-blue-700"
                    : "text-white hover:text-gray-200 hover:bg-blue-700"
                }`}
                aria-current={isActivePath(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-md p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActivePath(item.href)
                      ? "text-yellow-200 bg-blue-700"
                      : "text-white hover:text-gray-200 hover:bg-blue-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActivePath(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;