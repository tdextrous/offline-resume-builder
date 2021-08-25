const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


var config = {
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              additionalData: '@import "_variables.scss";',
              sassOptions: {
                includePaths: ['src/styles'],
              }
            }
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }), 
  ],
}

module.exports = (env, argv) => {
  // Edit config object depending on env mode.
  if (argv.mode === 'development') { 
  }

  if (argv.mode === 'production') { 
    config.output.path = path.resolve(__dirname, 'build/');
  }

  return config;
}
