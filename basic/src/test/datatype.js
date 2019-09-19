/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 09:39:17
 * @LastEditTime: 2019-09-01 10:16:24
 * @LastEditors: Please set LastEditors
 */
//原始类型
var bool = true;
var num = 123;
var str = 'asd';
// str = 1
//数组类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, '4'];
//元组类型
var tuple = [1, 'a'];
tuple.push(2);
console.log('tuple', tuple); //[1,'a',2]
// tuple[2]
//函数
var add = function (x, y) { return x + y; };
//对象
var obj = {
    a: 1,
    b: 2
};
obj.a = 3;
//Symbol:具有唯一的值
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); //false
// undefined 和 null 
var un = undefined;
var nu = null;
//void：让任何表达式返回undefined
var noReturn = function () { };
//any
var x;
x = [];
//never
var error = function () {
    throw new Error('err');
};
var endless = function () {
    while (true) {
    }
};
