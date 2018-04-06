const path = require('path');
const config = require('./.library');

export default () => ({
	mode: 'production',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, `./${config.folder_name}`),
		filename: `${config.file_name}.js`,
		libraryTarget: 'umd',
		globalObject: 'this',
		// libraryExport: 'default',
		library: `${config.library_name}.js`
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			}
		]
	},
});
