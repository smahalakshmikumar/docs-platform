export interface BrandConfig {
  name: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  theme: string;
  description?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const brandConfigs: Record<string, BrandConfig> = {
  'brand-a': {
    name: 'DocuFlow',
    logo: '📘',
    colors: {
      primary: 'bg-blue-600',
      secondary: 'bg-blue-500', 
      accent: 'bg-blue-400'
    },
    theme: 'blue',
    description: 'Streamlined documentation platform for modern developers',
    socialLinks: {
      github: 'https://github.com/docuflow',
      twitter: 'https://twitter.com/docuflow'
    }
  },
  'brand-b': {
    name: 'DevDocs Pro',
    logo: '🚀',
    colors: {
      primary: 'bg-green-600',
      secondary: 'bg-green-500',
      accent: 'bg-green-400'
    },
    theme: 'green',
    description: 'Professional documentation tools for enterprise teams',
    socialLinks: {
      github: 'https://github.com/devdocs-pro',
      linkedin: 'https://linkedin.com/company/devdocs-pro'
    }
  },
  'brand-c': {
    name: 'TechWrite',
    logo: '✍️',
    colors: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-500',
      accent: 'bg-purple-400'
    },
    theme: 'purple',
    description: 'Creative documentation platform for technical writers'
  }
};

export const getBrandConfig = (): BrandConfig => {
  const brand = process.env.NEXT_PUBLIC_BRAND || 'brand-a';
  const config = brandConfigs[brand];
  
  if (!config) {
    console.warn(`Brand configuration for "${brand}" not found. Falling back to default.`);
    return brandConfigs['brand-a'];
  }
  
  return config;
};

// Type guard for checking if brand exists
export const isSupportedBrand = (brand: string): brand is keyof typeof brandConfigs => {
  return brand in brandConfigs;
};

// Get all available brands
export const getAvailableBrands = (): string[] => {
  return Object.keys(brandConfigs);
};