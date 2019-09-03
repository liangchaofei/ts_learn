import { runInContext } from "vm";

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 09:46:00
 * @LastEditTime: 2019-09-03 10:56:03
 * @LastEditors: Please set LastEditors
 */

abstract class Animal {
    eat(){
        console.log('eat')
    }
    abstract sleep ():void //抽象方法
}
// let animal = new Animal() 会报错，抽象类不能被实例化，只能被继承

class Cat extends Animal {
    constructor(name:string){
        super()
        this.name = name;
    }
    name:string
    run(){}
    sleep(){
        console.log('sleep')
    }
}
let cat = new Cat('aa')
cat.eat()
console.log(cat)


//多态
class App extends Animal {
    sleep(){
        console.log('app')
    }
}

let app = new App()

let animals:Animal[] = [cat,app]
animals.forEach(item => {
    item.sleep()
})


//类的链式调用
class Work {
    step1(){
        return this
    }
    step2(){
        return this
    }
}
new Work().step1().step2()

class MyWork extends Work {
    next(){
        return this;
    }
}
new MyWork().next().step1().step2()


//类和接口的关系
interface Human {
    name:string;
    eat():void;
    sleep():void;
}
class Asian implements Human {
    constructor(name:string){
        this.name = name
    }
    name:string
    eat(){}
    sleep(){}
}
interface Man extends Human {
    cry():void
}

interface Child {
    run():void
}

interface Boy extends Child,Man {
    
}

let boy:Boy = {
    name:'',
    eat(){},
    sleep(){},
    cry(){},
    run(){},
}


//接口继承类
class Auto {
    state = 1
}
interface AutoInterface extends Auto {

}
class C implements AutoInterface {
    state = 1
}
//接口继承子类
class Bus extends Auto implements AutoInterface {

}