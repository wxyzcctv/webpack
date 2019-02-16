const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js/')
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
      },
      {
        test: /\.scss$/, //如果返现是scss文件，就先变为css，然后再变为js代码，最后变为style标签
        use: [
          "style-loader", // creates style nodes from JS strings，变为style标签
          {loader:"css-loader", options: { importLoaders: 1 } } ,// translates CSS into CommonJS
          "postcss-loader",
          "sass-loader" // compiles Sass to CSS, using Node Sass by default 变为css文件
        ]
      }
    ]
  }

};
