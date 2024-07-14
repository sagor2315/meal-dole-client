import withMT from "@material-tailwind/react/utils/withMT"

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        fontSans: "'Source Sans 3', sans-serif",
      },
      colors: {
        primaryColor: "#070707",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
})

