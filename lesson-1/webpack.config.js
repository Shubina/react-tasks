const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve("style-loader"),
          use: require.resolve("css-loader")
        })
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: "styles.css"
    })
  ],
  devServer: {
    open: true,
    port: 3001,
    inline: true,
    hot: true
  }
};

//how to reload srver? ctrl+c?