/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-purple": "#030014",
      },
      animation: {
        "scroll-left": "scroll-left 25s linear infinite",
        "scroll-right": "scroll-right 25s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 0.5rem))" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(calc(-100% - 0.5rem))" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
