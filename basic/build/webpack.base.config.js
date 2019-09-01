/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 23:13:34
 * @LastEditTime: 2019-08-31 23:13:51
 * @LastEditors: Please set LastEditors
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'app.js'
    },
    resolve:{
        extensions:['.js','.ts','.tsx']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/i,
                use:[{
                    loader:'ts-loader'
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/tpl/index.html'
        })
    ]
}
