const commonConfig = require('./build-utils/webpack.common');

module.exports = (env) => {
	console.log('Webpack ENV', env);

	return commonConfig;
};
