module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  safelist: ["bg-[#243c5a]", "bg-[#2e3849]", "bg-blue-500"],
};
