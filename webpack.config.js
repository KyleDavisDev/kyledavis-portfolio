/*
    ./webpack.config.js
*/
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
	rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["es2015", "react"]
				}
			}
		},
		{
			test: /\.(png|jpg)$/,
			use: {
				loader: 'file-loader?name=[name].[ext]&outputPath=images/'
			}
		},
	],
  },
  devServer: {
  	historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
  	template: './src/index.html',
  	filename: 'index.html',
  	inject: 'body'
  })]
}