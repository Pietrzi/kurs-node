const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: './client/client.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.handlebars$/, loader: 'handlebars-loader' }
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/'
  },
  devServer: {
    contentBase: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]
};
