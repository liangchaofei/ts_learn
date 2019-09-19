/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 09:39:17
 * @LastEditTime: 2019-09-01 10:16:24
 * @LastEditors: Please set LastEditors
 */
//原始类型
let bool:boolean = true;
let num:number = 123;
let str:string = 'asd'

// str = 1

//数组类型
let arr1:number[] = [1,2,3]
let arr2:Array<number | string > = [1,2,3,'4']

//元组类型
let tuple:[number,string] = [1,'a']
tuple.push(2)
console.log('tuple',tuple) //[1,'a',2]
// tuple[2]

//函数
let add = (x:number,y:number):number => x+y;


//对象
let obj:{a:number,b:number} = {
    a:1,
    b:2
}
obj.a = 3;

//Symbol:具有唯一的值
let s1:symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2 ) //false

// undefined 和 null 
let un:undefined = undefined;
let nu:null = null;

//void：让任何表达式返回undefined
let noReturn = () => {}

//any
let x;
x = []

//never
let error = () => {
    throw new Error('err')
}

let endless = () => {
    while(true){
        
    }
}