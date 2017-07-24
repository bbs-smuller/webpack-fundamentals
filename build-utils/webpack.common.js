const Path = require('path');

const config = {
	entry: './src/',
	output: {
		filename: '[chunkhash].bundle.js',
		path: Path.join(__dirname, 'dist')
	}
};

module.exports = config;
