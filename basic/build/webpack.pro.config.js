/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 23:13:34
 * @LastEditTime: 2019-08-31 23:13:34
 * @LastEditors: your name
 */
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
//clean-webpack-plugin：每次成功构建后清空构建目录
module.exports = {
    plugins:[
        new CleanWebpackPlugin()
    ]
}
