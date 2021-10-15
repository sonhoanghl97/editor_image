const { join } = require("path");

module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [],
      path: ["./node_modules"],
    }),
    require("postcss-utilities")(),
    require("precss")(),
  ],
};
