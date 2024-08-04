import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      /**
       * Light Mode
       */
      primary: '#35618E',
      'on-primary': '#FFFFFF',
      'primary-container': '#D1E4FF',
      'on-primary-container': '#001D36',

      secondary: '#535F70',
      'on-secondary': '#FFFFFF',
      'secondary-container': '#D6E3F7',
      'on-secondary-container': '#101C2B',

      tertiary: '#29638A',
      'on-tertiary': '#FFFFFF',
      'tertiary-container': '#CBE6FF',
      'on-tertiary-container': '#001E30',

      error: '#BA1A1A',
      'on-error': '#FFFFFF',
      'error-container': '#FFDAD6',
      'on-error-container': '#410002',

      surface: '#F7F9FF',
      'on-surface': '#181C20',
      'on-surface-variant': '#3F4947',

      outline: '#6F7977',
      'outline-variant': '#BEC9C6',
      shadow: '#000000',
      scrim: '#000000',
      'inverse-surface': '#2D3135',
      'inverse-on-surface': '#EEF1F6',

      'surface-container-lowest': '#FFFFFF',
      'surface-container-low': '#F1F4F9',
      'surface-container': '#EBEEF3',
      'surface-container-high': '#E5E8ED',
      'surface-container-highest': '#E0E3E8',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
