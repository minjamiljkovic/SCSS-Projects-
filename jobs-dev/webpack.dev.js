const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');   

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});