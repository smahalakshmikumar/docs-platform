export interface BrandConfig {
    name: string;
    logo: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
    theme: string;
  }
  
  const brandConfigs: Record<string, BrandConfig> = {
    'brand-a': {
      name: 'DocuFlow',
      logo: '📘',
      colors: {
        primary: 'bg-brand-a-primary',
        secondary: 'bg-brand-a-secondary', 
        accent: 'bg-brand-a-accent'
      },
      theme: 'blue'
    },
    'brand-b': {
      name: 'DevDocs Pro',
      logo: '🚀',
      colors: {
        primary: 'bg-brand-b-primary',
        secondary: 'bg-brand-b-secondary',
        accent: 'bg-brand-b-accent'
      },
      theme: 'green'
    }
  };
  
  export const getBrandConfig = (): BrandConfig => {
    const brand = process.env.NEXT_PUBLIC_BRAND || 'brand-a';
    return brandConfigs[brand] || brandConfigs['brand-a'];
  };