/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 11:04:19
 * @LastEditTime: 2019-09-01 18:20:37
 * @LastEditors: Please set LastEditors
 */

// 对象类型接口
interface List {
    readonly id:number; //只读属性
    name:string;
    age?:number; // 可选参数
}

interface Result {
    data:List[]
}

function render(result:Result) {
    result.data.map((item) => {
        console.log(item.id,item.name)
        if(item.age){
            console.log(item.age)
        }
    })
}

let res ={
    data : [
        {
            id:1,
            name:'a'
        },
        {
            id:2,
            name:'s'
        }
    ]
}
render(res)

// ----开始----
// 函数类型接口
interface Add {
    (x:number,y:number): number
}
//用type定义
type Add2 = (x:number,y:number)=> number

// 实现函数
let add2:Add2 = (a,b) => a+b

// -----结束-----


//混合类型接口
// ----开始
interface Lib {
    ():void;
    version:string;
    doSomething() :void;
}
//实现
function getLib(){
    let lib:Lib = (() => {}) as Lib;
    lib.version = '1'
    lib.doSomething = () => {
    }
    return lib;
}

let lib1 = getLib()
lib1()
lib1.doSomething()

let lib2 = getLib()
// ----结束----


// 函数相关知识点
// 函数定义:4种
function add1_1(x:number,y:number){
    return x + y;
}
let add1_2 : (x:number,y:number) => number;

type add1_3 = (x:number,y:number) => number;

interface add1_4 {
    (x:number,y:number) :number;
}

//形参和实参个数必须相同
// add1_1(1,2) //正确
// add1_1(1) //错误，少一个参数
// add1_1(1,2,3) //错误，多一个参数

//可选参数(?),可选参数必须位于必须参数后面
function add1_5(x:number,y?:number){
    return y ? x+y :x
}
add1_5(1) //1
add1_5(1,2) //3


//参数提供默认值
function add1_6(x:number,y=0,z:number,q=2){
    return x + y + z + q;
}

//函数调用的时候，需要给默认值的位置传undefined，最后一个默认值可以不传
add1_6(1,undefined,2) //5


//剩余参数(...list)
function add1_7(x:number,...list:number[]){
    return x + list.reduce((prev,curr) => prev + curr)
}
console.log(add1_7(1,2,3,4,5)) //15



//函数重载
function add1_8(...rest:number[]):number
function add1_8(...rest:string[]):string
function add1_8(...rest:any):any {
    let first = rest[0]
    if( typeof  first === 'string'){
        return rest.join('')
    }
    if(typeof  first === 'number'){
        return rest.reduce((pre:any,cur:any) => pre + cur)
    }
}

console.log(add1_8(1,2,3))
console.log(add1_8('a','b'))