module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          purple: {
            500: "#8A2BE2"
          }
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  };
  