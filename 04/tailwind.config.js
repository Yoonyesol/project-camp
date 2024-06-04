/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#4F4F4F",
        "custom-grey-5": "rgba(53, 56, 62, 0.05)",
      },
    },
  },
  plugins: [],
};
