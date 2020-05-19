module.exports = {
  entry: {
    titanic: './titanic.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/public'
  },
  devServer: {
    contentBase: './public',
  },
};
