const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
    devServer: {
      port: 3030, //port
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg)$/,
          /*loader: "url-loader",
          options: {
            limit: false,
            name: 'images/[name].[ext]'
          },*/
          type: 'asset/resource',
          generator: {
            filename: './images/[name][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          /*loader: "url-loader",
          options: {
            limit: false,
            name: 'fonts/[name].[ext]'
          },*/
          type: 'asset/resource',
          generator: {
            filename: './fonts/[name][ext]'
          }
        }
      ],
    },
  };