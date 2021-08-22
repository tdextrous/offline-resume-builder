const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
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
              /*
              // See https://webpack.js.org/loaders/sass-loader/#function-1
              additionalData: (content, loaderContext) => {
                const { resourcePath, relativeContext } = loaderContext;
                console.log('resPath:', resourcePath);
                const variablesPath = 'src/styles/_variables.scss';
                const relativeVarPath = path.relative(resourcePath, variablesPath);
                let importString = `@import "${relativeVarPath}";`
                return importString;
              }
              */
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }), 
  ],
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js"
  }
}
