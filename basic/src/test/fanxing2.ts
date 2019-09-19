/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 22:44:40
 * @LastEditTime: 2019-09-16 22:54:55
 * @LastEditors: Please set LastEditors
 */
class Log<T>{
    run(val:T){
        console.log(val)
        return val;
    }
}
//实例化
let log1 = new Log<number>()
log1.run(1) //传的参数必须是number

let log2 = new Log()
log2('a')

interface Length {
    length:number;
}

function logs<T extends Length>(val:T):T{
    console.log(val,val.length)
    return val;
}