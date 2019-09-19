/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 22:43:30
 * @LastEditTime: 2019-09-18 09:19:13
 * @LastEditors: Please set LastEditors
 */
//交叉类型和联合类型

//交叉类型：将多个类型合并成一个类型
interface DogInterface{
    run():void
}
interface CatInterface{
    jump():void
}

let pet :DogInterface & CatInterface = {
    run(){},
    jump(){}
}

//联合类型：类型不确定，为多个类型中的一个

let a2: number | string = 1; //可以是数字，也可以是字符串

//字面量联合类型
let b2 : 'a' | 'b' | 'c'
let c3 : 1 | 2 | 3

//对象联合类型
//取交集 
class Dog23 implements DogInterface {
    run(){}
    eat(){}
}
class Cat implements CatInterface {
    jump(){}
    eat(){}
}
enum Master {Boy,Girl}
function getPet(master:Master){
    let pet = master===Master.Boy ?new Dog23() :new Cat()
    pet.eat() //可以调用两个类的公共方法
    // pet.run() 会报错，只能调用两个类的公共方法
    return pet;
}


// 索引类型
// 比如有个对象，需要抽取值组成数组
let obj23 = {
    a:1,
    b:2,
    c:3
}
function getValue(obj23:any,keys:string[]){
    return keys.map(key => obj23[key])
}
console.log(getValue(obj23,['a','b'])) //[1,2]
console.log(getValue(obj23,['d','e'])) //[undefined,undefined]

//索引类型的查询操作符
// keyof T
interface Obj {
    a:number,
    b:string,
}
let key:keyof Obj // let key : 'a' | 'b'


// T[k] :对象T的属性K所代表的类型
let val :Obj['a'] // let val:number

// 改造下
function getValue2<T,K extends keyof T>(obj:T,keys:K[]):T[K][]{
    return keys.map(key => obj[key])
}
// console.log(getValue2(obj,['d','e']))  报错




// 映射类型
// 从旧的类型生成新的类型

// 比如把所有属性变成只读
interface Read {
    a:string,
    b:number,
    c:boolean
}
type ReadObj = Readonly<Read> //此时ReadObj变成只读了


// 把参数变成可选的
type PartialObj = Partial<Read> //变成可选属性了

//抽取其中的指定属性
type PickObj = Pick<Read, 'a' | 'b'> //只有a和b属性了




//条件类型
// T extends U ? X : Y

type TypeName<T> = 
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends Function ? 'function' :
    "object";

type T1 = TypeName<string> //type T1 = 'string'
type T2 = TypeName<string[]> //type T2 = 'object'

//分布式条件类型
// (A | B) extends U?X:Y
// 等价于
// (A extends U ? X  : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]> // type T3  = 'string' | 'object'


