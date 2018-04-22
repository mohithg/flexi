const webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {

    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true
    },
    output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].js'
    }

});
