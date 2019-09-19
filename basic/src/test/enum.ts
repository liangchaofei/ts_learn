/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 10:20:06
 * @LastEditTime: 2019-09-01 10:50:14
 * @LastEditors: Please set LastEditors
 */
//枚举类型

// 数字枚举
enum Role {
    Reporter,
    Developer,
    Main,
    Owner,
    Guest,
}
console.log(Role.Reporter) //0
console.log(Role)
// 自定义数字枚举
enum Role2 {
    Reporter = 1,
    Developer,
    Main,
    Owner,
    Guest,
}
console.log(Role2.Reporter) //1
console.log(Role2.Developer) //2



//字符串枚举
enum Msg {
    Success = '成功',
    Erros = '失败'
}

// 异构枚举：数字枚举和字符串枚举混用
enum Answer {
    N,
    Y = 'yes'
}


//枚举成员
enum Char {
    a,
    b = Char.a,
    c = 1+ 3,
    d = Math.random(),
    e = '123'.length
}

//常量枚举
const enum Month {
    Jan,
    Feb
}

//枚举类型
enum E {a,b}
enum F {A=0,B=1}
enum G {a='a',b='b'}