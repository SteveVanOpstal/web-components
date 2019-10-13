const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-load-image.js",
    library: "ReactLoadImage",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: "css-loader"
        }
      }
    ]
  }
};
