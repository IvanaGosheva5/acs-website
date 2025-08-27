/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      container: { center: true, padding: "1.5rem" },
      letterSpacing: { tighter2: "-.03em" },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};
