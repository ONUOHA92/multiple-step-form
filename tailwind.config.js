/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "marine-blue": "hsl(213, 96%, 18%)",
          "purplish-blue": "hsl(243, 100%, 62%)",
          "pastel-blue": "hsl(228, 100%, 84%)",
          "light-blue": "hsl(206, 94%, 87%)",
          "strawberry-red": "hsl(354, 84%, 57%)",
        },
        neutral: {
          "cool-gray": "hsl(231, 11%, 63%)",
          "light-gray": "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      backgroundImage: {
        "pattern-desktop": "url('/assets/images/bg-sidebar-desktop.svg')",
        "pattern-mobile": "url('/assets/images/bg-sidebar-mobile.svg')",
        checkMark: "url('/assets/images/icon-checkmark.svg')",
      },
    },
  },
  plugins: [],
};
