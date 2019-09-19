/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 21:52:25
 * @LastEditTime: 2019-09-19 21:52:25
 * @LastEditors: your name
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
);