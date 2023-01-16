const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "../../packages/ui/components/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  // plugins: [],
};
