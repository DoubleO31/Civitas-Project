const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [
      {
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "env", { plugins: ["babel-plugin-transform-class-properties"] }]
      }
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include : path.join(__dirname, '/client/src'),
        loader: 'url-loader?limit=40000000&name=images/[name].[ext]'
    },
  ],
  },

  devServer: {
  port: 3000,
  open: true,
  proxy: {
    "/api": "http://localhost:5000"
  }
},

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
