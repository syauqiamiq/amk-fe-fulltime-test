/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        "amk-blue": "#2066FB",
        "amk-green": "#87d068",
      },
      backgroundColor: {
        "amk-blue": "#2066FB",
        "amk-light-blue": "#E7EDFB",
        "amk-chat-bg": "#F8FAFD",
        "amk-green": "#87d068",
      },
    },
  },
  plugins: [],
};
