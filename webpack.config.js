
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'images/[name][hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant page",
      template: "./src/index.html",
       filename: 'index.html',
    }),
  ],
};
