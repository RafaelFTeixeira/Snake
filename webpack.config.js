var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/game.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Snake',
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new CopyWebpackPlugin([{
      from: './soundEffects',
      to: './soundEffects',
      toType: 'dir'
    },
    {
      from: './sprites',
      to: './sprites',
      toType: 'dir'
    },
    {
      from: './css/site.css',
      to: './',
      toType: 'dir'
    },
    {
      from: './favicon.ico',
      to: './',
      toType: 'dir'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};