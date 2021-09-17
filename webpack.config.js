const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
  ],
  optimization: {
    usedExports: false,
  },
};
