/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"], // ✅ 让 Tailwind 识别 DM Sans
      },
    },
  },
  plugins: [],
};