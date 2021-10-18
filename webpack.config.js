const HtmlWebPackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' }),
		// new BundleAnalyzerPlugin()
	],
	output: {
		path: path.resolve(__dirname, 'public/'),
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true
	},
	devtool: "eval-source-map"
}