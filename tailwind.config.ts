import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "brand-a": {
          primary: "#3B82F6",
          secondary: "#1E40AF",
          accent: "#F59E0B",
        },
        "brand-b": {
          primary: "#10B981",
          secondary: "#059669",
          accent: "#F472B6",
        },
      },
    },
  },
  plugins: [],
}

export default config
