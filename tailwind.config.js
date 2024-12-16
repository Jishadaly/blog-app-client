import { defaultTheme } from "tailwindcss";
const { fontFamily } = defaultTheme;



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      
    },
    extend: {

      colors: {
        // Light mode theme: black and white
        background: "#ffffff", // White background
        foreground: "#000000", // Black foreground (text)
        primary: {
          DEFAULT: "#000000", // Black for primary
          foreground: "#ffffff", // White for text on primary
        },
        secondary: {
          DEFAULT: "#f5f5f5", // Light gray for secondary
          foreground: "#000000", // Black text for secondary
        },
        border: "#e0e0e0", // Light gray border
        muted: {
          DEFAULT: "#f7f7f7", // Muted light gray
          foreground: "#666666", // Dark gray muted text
        },
        destructive: {
          DEFAULT: "#ff0000", // Red for destructive actions
          foreground: "#ffffff", // White text
        },
           // Dark theme colors
           dark: {
            background: "#000000", // Black background
            foreground: "#ffffff", // White foreground
            border: "#333333", // Darker border
            primary: {
              DEFAULT: "#ffffff", // White primary color
              foreground: "#000000", // Black foreground for primary
            },
            secondary: {
              DEFAULT: "#444444", // Grayish secondary
              foreground: "#ffffff", // White foreground for secondary
            },
            muted: {
              DEFAULT: "#555555", // Muted gray for dark
              foreground: "#cccccc", // Light gray for text
            },
          },
      },
      
      // borderRadius: {
      //   lg: `var(--radius)`,
      //   md: `calc(var(--radius) - 2px)`,
      //   sm: "calc(var(--radius) - 4px)",
      // },
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        // sans: ["Inter", ...fontFamily.sans],
         sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'Helvetica', 
          'Arial', 
          'sans-serif', 
          '"Apple Color Emoji"', 
          '"Segoe UI Emoji"', 
          '"Segoe UI Symbol"',
          ...fontFamily.sans,
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        DEFAULT: "none",
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        inner: "none",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
