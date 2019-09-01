/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 23:13:34
 * @LastEditTime: 2019-08-31 23:14:10
 * @LastEditors: Please set LastEditors
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

let config = process.NODE_ENV === 'development' ? devConfig:proConfig;

module.exports=merge(baseConfig,config)
