/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 11:04:19
 * @LastEditTime: 2019-09-01 18:20:37
 * @LastEditors: Please set LastEditors
 */
function render(result) {
    result.data.map(function (item) {
        console.log(item.id, item.name);
        if (item.age) {
            console.log(item.age);
        }
    });
}
var res = {
    data: [
        {
            id: 1,
            name: 'a'
        },
        {
            id: 2,
            name: 's'
        }
    ]
};
render(res);
// 实现函数
var add2 = function (a, b) { return a + b; };
//实现
function getLib() {
    var lib = (function () { });
    lib.version = '1';
    lib.doSomething = function () {
    };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var lib2 = getLib();
// ----结束----
// 函数相关知识点
// 函数定义:4种
function add1_1(x, y) {
    return x + y;
}
var add1_2;
//形参和实参个数必须相同
// add1_1(1,2) //正确
// add1_1(1) //错误，少一个参数
// add1_1(1,2,3) //错误，多一个参数
//可选参数(?),可选参数必须位于必须参数后面
function add1_5(x, y) {
    return y ? x + y : x;
}
add1_5(1); //1
add1_5(1, 2); //3
//参数提供默认值
function add1_6(x, y, z, q) {
    if (y === void 0) { y = 0; }
    if (q === void 0) { q = 2; }
    return x + y + z + q;
}
//函数调用的时候，需要给默认值的位置传undefined，最后一个默认值可以不传
add1_6(1, undefined, 2); //5
//剩余参数(...list)
function add1_7(x) {
    var list = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        list[_i - 1] = arguments[_i];
    }
    return x + list.reduce(function (prev, curr) { return prev + curr; });
}
console.log(add1_7(1, 2, 3, 4, 5)); //15
function add1_8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add1_8(1, 2, 3));
console.log(add1_8('a', 'b'));
