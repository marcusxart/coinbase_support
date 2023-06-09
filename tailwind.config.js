/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052FF",
        btn: "#1652F0",
        text: "#0A0B0D",
        lightText: "#B7C2CC",
        header: "#113355",
        line: "#5b616e33",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/svg/home-hero__bg.svg')",
      },
      fontSize: {
        "title-font-1": "28px",
      },
    },
  },
  plugins: [],
};
