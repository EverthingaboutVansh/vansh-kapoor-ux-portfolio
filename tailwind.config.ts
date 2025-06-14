
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: "#14213D", // deep navy
        accent: "#FCA311",  // vibrant yellow-orange
        black: "#000000",
        graybg: "#E5E5E5",
        background: "#FFFFFF",
        light: "#FFFFFF",
        muted: "#757575",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(20, 33, 61, 0.08)",
        hover: "0 6px 32px 0 rgba(252, 163, 17, 0.10)",
      },
      animation: {
        'fade-in': 'fade-in 0.7s cubic-bezier(0.4,0,0.2,1)',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.4,0,0.2,1)'
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: "translateY(24px)" },
          to: { opacity: '1', transform: "translateY(0)" }
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
