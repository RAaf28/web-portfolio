import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      colors: {
        background: '#fbf9f4',
        surface: '#fbf9f4',
        'surface-container': '#f0eee9',
        'surface-container-low': '#f5f3ee',
        'surface-container-high': '#eae8e3',
        'surface-variant': '#e4e2dd',
        outline: '#76777b',
        'outline-variant': '#c6c6cb',
        primary: '#010306',
        'on-primary': '#ffffff',
        secondary: '#396759',
        'on-surface': '#1b1c19',
        'on-surface-variant': '#45474b',
        'tertiary-container': '#271b00',
        'on-tertiary-container': '#a3802c'
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        brutal: '6px 6px 0 0 #010306'
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem'
      },
      spacing: {
        gutter: '2rem',
        stack_gap: '3rem',
        max_width: '75rem'
      }
    }
  },
  plugins: []
};

export default config;