module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1592A",
          secondary: "#1855CB",
          accent: "#CC2200",
          info: "#BC8500",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
