const Path = require('path');

module.exports = (env) => {
	console.log('Webpack ENV', env);

	return {
		entry: './src/',
		output: {
			filename: '[chunkhash].bundle.js',
			path: Path.join(__dirname, 'dist')
		}
	};
};
