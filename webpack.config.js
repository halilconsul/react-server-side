const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./public/js/'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
         test: /\.scss$/,
         loader: "style-loader!css-loader!postcss-loader!sass",
         exclude: [/node_modules/, /public/]
      }
    ],
  },
};
