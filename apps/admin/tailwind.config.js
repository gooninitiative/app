const defaultTailwindConfig = require("tsconfig/tailwind.config");

module.exports = Object.assign({},
  {
    corePlugins: {
      // Disable tailwind default
      // container component in order to create our own.
      container: false,
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          // Containter
          // Create our own container component
          // and ask tailwind to take it into account.
          ".container": {
            maxWidth: "86vw",
            marginLeft: "auto",
            marginRight: "auto",
            "@screen sm": {
              maxWidth: "90vw",
            },
            "@screen md": {
              maxWidth: "92vw",
            },
            "@screen lg": {
              width: "92vw",
              maxWidth: "1060px",
            },
            "@screen xl": {
              width: "92%",
            },
          },
        });
      },
    ],
  },
  defaultTailwindConfig
);
