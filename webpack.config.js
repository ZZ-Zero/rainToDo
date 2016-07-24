var path = require('path'),
	webpack = require('webpack'),
	node_modules = path.resolve(__dirname, 'node_modules'),
	pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:4000",
    	"webpack/hot/only-dev-server",
		'./entry.js'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
          'react': pathToReact
        },
		extensions: ['','js','jsx','png','jpg','jpeg','styl']
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
            	exclude: /node_modules/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
			},
			{
				test: /\.styl$/,
          		exclude: /node_modules/,
				loader: 'style!css!stylus'
			},
			{
				test: /\.(png|jpg|jpeg)/,
				loader: 'url-loader?limit=10000'
			}
		],
		noParse: [pathToReact]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: { fallback: path.join(__dirname, "node_modules") },
	resolveLoader: { root: path.join(__dirname, "node_modules") }
}