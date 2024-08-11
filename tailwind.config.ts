import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";
import tailwindcssAnimate from "tailwindcss-animate";

// The following function is used to add CSS variables for colors.
function addVariablesForColors({ addBase, theme }: { addBase: Function; theme: Function }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: ["class"], // Enable dark mode with class strategy
  content: [
    './pages/**/*.{ts,tsx}', // Include TypeScript pages
    './components/**/*.{ts,tsx}', // Include TypeScript components
    './app/**/*.{ts,tsx}', // Include TypeScript app directory
    './src/**/*.{ts,tsx}', // Include TypeScript src directory
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Include NextUI theme files
  ],
  prefix: "", // Optional prefix for utility classes
  theme: {
    container: {
      center: true, // Center the container by default
      padding: "2rem", // Default padding for the container
      screens: {
        "2xl": "1400px", // Custom screen size for 2xl
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))", // HSL value for border color
        input: "hsl(var(--input))", // HSL value for input color
        ring: "hsl(var(--ring))", // HSL value for ring color
        background: "hsl(var(--background))", // HSL value for background color
        foreground: "hsl(var(--foreground))", // HSL value for foreground color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Default primary color
          foreground: "hsl(var(--primary-foreground))", // Primary foreground color
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Default secondary color
          foreground: "hsl(var(--secondary-foreground))", // Secondary foreground color
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Default destructive color
          foreground: "hsl(var(--destructive-foreground))", // Destructive foreground color
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Default muted color
          foreground: "hsl(var(--muted-foreground))", // Muted foreground color
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Default accent color
          foreground: "hsl(var(--accent-foreground))", // Accent foreground color
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Default popover color
          foreground: "hsl(var(--popover-foreground))", // Popover foreground color
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Default card color
          foreground: "hsl(var(--card-foreground))", // Card foreground color
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Large border radius
        md: "calc(var(--radius) - 2px)", // Medium border radius
        sm: "calc(var(--radius) - 4px)", // Small border radius
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))", // Scroll keyframe animation
          },
        },
        "accordion-down": {
          from: { height: "0" }, // Accordion down keyframe animation
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Accordion up keyframe animation
          to: { height: "0" },
        },
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite", // Scroll animation
        "accordion-down": "accordion-down 0.2s ease-out", // Accordion down animation
        "accordion-up": "accordion-up 0.2s ease-out", // Accordion up animation
      },
    },
  },
  plugins: [
    nextui(), // Integrate NextUI plugin
    tailwindcssAnimate, // Integrate Tailwind CSS animations
    addVariablesForColors, // Add custom color variables
  ],
};
function flattenColorPalette(colors: any): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  function recurse(current: any, prefix: string = '') {
    if (typeof current !== 'object' || current === null) {
      // Handle non-object values
      return;
    }

    Object.entries(current).forEach(([key, value]) => {
      const newPrefix = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        recurse(value, newPrefix);
      } else if (typeof value === 'string') {
        // Ensure value is a string before assigning to result
        result[newPrefix] = value;
      } else if (Array.isArray(value)) {
        // Handle array values if necessary
        value.forEach((item, index) => {
          if (typeof item === 'string') {
            result[`${newPrefix}-${index}`] = item;
          }
        });
      }
    });
  }

  recurse(colors);
  return result;
}


export default config;
