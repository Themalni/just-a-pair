'use strict'

const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        include: path.resolve(__dirname, "./")
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.resolve(__dirname, "./")
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        include: path.resolve(__dirname, "./")
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  }
}