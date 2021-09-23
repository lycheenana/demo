const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + '/dist/',
    // publicPath: '/static/',
    filename: 'static/[name].[hash].js',   //  出口文件放在子目录static下
  },
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
        generator: {
          filename: 'static/[hash][ext]'
        }
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    usedExports: false,
  },
  devServer: {
    static: './dist'
  }
};
