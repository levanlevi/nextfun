import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-default)',
          hover: 'var(--primary-hover)',
          disabled: 'var(--primary-disabled)',
        },
        
        secondary: {
          DEFAULT: 'var(--secondary-default)',
        },

        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          disabled: 'var(--text-disabled)',
          buttonText: 'var(--text-button)'
        },

        background: {
          DEFAULT: 'var(--background-default)',
          elevation: {
            1: 'var(--background-elevation-1)',
            2: 'var(--background-elevation-2)',
            3: 'var(--background-elevation-3)',
          },
        },

        states: {
          success: {
            DEFAULT: 'var(--states-success-default)',
            elevation: {
              1: 'var(--states-success-elevation-1)',
              2: 'var(--states-success-elevation-2)',
            },
          },
          error: {
            DEFAULT: 'var(--states-error-default)'
          },
          warning: {
            DEFAULT: 'var(--states-warning-default)'
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
