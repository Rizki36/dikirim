module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#39368E",
      },
      fontFamily: {
        // 'sans': ['ui-sans-serif', 'system-ui', ...],
        // 'serif': ['ui-serif', 'Georgia', ...],
        mono: ["Noto Sans", "ui-monospace", "SFMono-Regular"],
        // 'display': ['Oswald', ...],
        // 'body': ['"Open Sans"', ...],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
