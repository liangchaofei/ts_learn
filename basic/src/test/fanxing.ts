/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 22:03:50
 * @LastEditTime: 2019-09-16 22:45:24
 * @LastEditors: Please set LastEditors
 */
//泛型
function log<T>(val:T):T{
    console.log(val)
    return val;
}

interface Log<T = string>{
    (val:T) : T
}
// let myLog:Log = log
// myLog('a')