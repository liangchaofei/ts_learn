/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 23:13:34
 * @LastEditTime: 2019-09-19 21:06:13
 * @LastEditors: Please set LastEditors
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

// let config = process.NODE_ENV === 'development' ? devConfig:proConfig;

module.exports= (env,argv) => {
    let config = argv.mode === 'development' ? devConfig:proConfig;
    return merge(baseConfig,config)
}
