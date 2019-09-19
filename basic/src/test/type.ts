/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 22:59:32
 * @LastEditTime: 2019-09-17 09:41:47
 * @LastEditors: Please set LastEditors
 */
//基础类型推断
let a = 1;
let b = []
let c = [1]
let  d = (x:number) => x+ 1

//最佳通用类型推断
let e = [1,null]

window.onkeydown = (e:any) => {
    console.log(e.button)
}


//接口兼容性
interface X{
    a:any;
    b:any;
}
interface Y{
    a:any;
    b:any;
    c:any;
}
let x1:X = {a:1,b:2}
let y1 :Y= {a:1,b:2,c:3}
x1 = y1  
// y1 = x1


//函数兼容性
type Handler = (a:number,b:number) => void
function hot(handler:Handler){
    return handler;
}

//1)参数个数
let handler1 = (a:number) => {}
hot(handler1) //可以
let handler2 = (a:number,b:number,c:number) => {}
// hot(handler2) 报错

// 可选参数和剩余参数
let a1 = (p1:number,p2:number) => {}
let b1 = (p1?:number,p2?:number) => {}
let c1 = (...args:number[]) => {}
// 1)固定参数兼容可选参数和剩余参数
a1 = b1
a1 = c1
// 可选参数不兼容固定参数和剩余参数
// b1 = a1
// b1 = c1
//剩余参数可以兼容固定参数和可选参数
c1 = a1 
c1 = b1


// 2)参数类型必须匹配
let handler3 = (a:string) => {}
// hot(handler3) 类型不兼容，报错


// 对象兼容
// 成员多的兼容成员少的
interface Point3D{
    x:number;
    y:number;
    z:number;
}
interface Point2D{
    x:number;
    y:number;
}
let p3d = (point:Point3D) => {}
let p2d = (point:Point2D) => {}
p3d = p2d
// p2d = p3d 报错

// 3)返回值类型
// 成员少的兼容成员多的
let f = () => ({name:'a'})
let g = () => ({name:'a',aaa:'a'})
f = g
// g = f 报错


//枚举兼容性
// 枚举之间不兼容
enum Fruit {Apple,Banana}
enum Color {Red,Blue}
// let color:Color.Red = Fruit.Apple  报错


//类兼容性
// 构造函数和静态成员不参与比较

//泛型兼容性
interface Empty<T>{

}
let obj1:Empty<number> = {}
let obj2:Empty<string> = {}
obj1 = obj2 //兼容，Empty为空的时候兼容

//结构之间兼容：成员少的兼容成员多的
//函数之间兼容：参数多的兼容参数少的