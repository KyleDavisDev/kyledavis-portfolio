/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


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
			test: /\.(png|jpg|pdf)$/,
			use: {
				loader: 'file-loader?name=[name].[ext]&outputPath=images/'
			}
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: ['css-loader', 'sass-loader'],
				publicPath: '/dist'
			})
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			use: {
				loader: 'file-loader?name=[name].[ext]&outputPath=/fonts/'
			}
        }
	],
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html',
		filename: 'index.html',
		inject: 'body'
		}),
  		new ExtractTextPlugin("styles.css")
	]
}