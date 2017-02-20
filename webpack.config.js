var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './app/index.js',
        vendor: './app/ad.js'
            },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [
                path.resolve(__dirname, "app/css/common"),
            ],
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, "app/css/ads"),
            ],
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
};
