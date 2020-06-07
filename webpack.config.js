const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: ['lodash'], // 打包时忽略lodash
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 用 <script> 方式引入，全局的变量名。将 library 挂载到window上
    libraryTarget: 'umd', // 将库挂载在什么地方。可选：this（window), window。适用于 AMD、CommonJs、ES6 module引入方式
  }
}
