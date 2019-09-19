/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 23:13:34
 * @LastEditTime: 2019-08-31 23:13:34
 * @LastEditors: your name
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}