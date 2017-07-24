const Path = require('path');

module.exports = {
	entry: './src',
	output: {
		filename: '[chunkhash].bundle.js',
		path: Path.join(__dirname, 'dist')
	}
};
