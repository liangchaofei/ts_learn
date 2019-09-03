/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 18:20:57
 * @LastEditTime: 2019-09-03 09:45:47
 * @LastEditors: Please set LastEditors
 */
class Dog {
    constructor(name:string){
        this.name = name;
    }
    name:string
    run(){}
}
console.log(Dog.prototype)
let dog = new Dog('aa')
console.log(dog)


class Husky extends Dog {
    constructor(name:string,color:string){
        super(name) //必须有，父类的实例
        this.color = color //一定在super之后调用
    }
    //自己的属性
    color:string;
}


//成员修饰符

//public 默认
//private 
class Dog2 {
    constructor(name:string){
        this.name = name;
    }
    name:string
    run(){}
    private pro(){} //私有成员
    protected pro2(){} //受保护成员
}
let dog2 = new Dog2('aa')
// dog2.pro()  会报错，不能被类的实例调用
class Husky2 extends Dog2 {
    constructor(name:string,color:string){
        super(name) //必须有，父类的实例
        this.color = color //一定在super之后调用
        // this.pro()  私有成员也不能在子类中调用
    }
    //自己的属性
    color:string;
}


