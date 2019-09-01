<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 21:22:48
 * @LastEditTime: 2019-09-01 21:22:50
 * @LastEditors: Please set LastEditors
 -->
## 基本类型
### 类型注解
+ 作用：相当于强类型语言的类型声明
+ 语法：（变量/函数）：type

### 原始类型
```ts
    //原始类型
    let bool:boolean = true;
    let num:number = 123;
    let str:string = 'asd'
```
如果将str变量改成number类型，就会提示报错，ts不允许改变变量的数据类型

![](https://user-gold-cdn.xitu.io/2019/9/1/16cea7e0f7894f57?w=734&h=242&f=png&s=36928)

### 数组类型
+ 两种定义方式
```ts
    //数组类型
    let arr1:number[] = [1,2,3]
    let arr2:Array<number> = [1,2,3]
```
+ ts只允许数组中包括一种数据类型的值，在数组arr1中添加字符串类型的值就会报错

![](https://user-gold-cdn.xitu.io/2019/9/1/16cea813e5017db9?w=1196&h=186&f=png&s=48994)

+ 如果想为数组添加不同类型的值，需要使用联合类型
```ts
    //联合类型
    let arr1:number[] | string[] = [1,2,3]
    let arr2:Array<number | string> = [1,2,3]
```

### 元组类型
+ 限定了数组的类型和个数，数组值必须安装声明变量时的类型一致，个数必须一致，否则都会报错。
```ts
    let tuple:[number,string] = [1,'a'] //正确
    let tuple2:[number,string] = ['a','a'] //错误，不能将字符串a赋值给nuumber
    let tuple3 = [number,string] = [1,'a',3] //错误，数组中只能有两个值
```
+ 元组越界问题:向元组中push一个值
```ts
    let tuple:[number,string] = [1,'a']
    tuple.push(2)
    console.log(tuple) //[1,'a',2],可以看出可以向tuple使用push方法添加
    
    //但是不能访问，会报错。
    tuple[2] 
```

![](https://user-gold-cdn.xitu.io/2019/9/1/16cea8b2d36a031a?w=1260&h=208&f=png&s=42522)

### 函数
```ts
    let add = (x:number,y:number):number => x+y;
```
+ ts要求给函数参数提供类型值，返回值一般不需要提供类型值，ts会自动使用推导出返回值类型。


### 对象
```ts
    let obj:object = {
        a:1,
        b:2,
    }
    
    // 这样写不允许修改对象的变量值
    obj.a = 3 //报错
    
    正确做法：给变量直接赋值对应的类型
    let obj2:{a:number,b:number} = {
        a:1,
        b:2,
    }
    obj2.a = 3 //正确
```

### Symbol
+ 具有唯一的值
+ 两种定义方式
```ts
    let s1:symbol = Symbol()
    let s2 = Symbol()
    
    //此时s1和s2是不相等的
    console.log(s1 === s2) //false
```

### null 和 undefined
```ts
    let nu:null = null;
    let un:undefined = undefined;
```

### void
+ 让任何表达式返回undefined
+ 没有任何返回值
```ts
    let noReturn = () => {}
```

### any
+ 可以是任何类型的值

### never
+ 永远不会有返回值
```ts
    let error = () => {
        throw new Error('err')
    }
    
    let endless = () => {
        while(true){
            
        }
    }
```

## 枚举类型
+ 一组有名字的常量集合

### 数字枚举
+ 使用enum定义枚举
```ts
    // 正常枚举值是从0开始
    enum Role {
        Reporter, //0
        Developer, //1
        Main,   //2
        Owner,  //3
        Guest,  //4
    }
    console.log(Role.Reporter) //0
    
    //自定义枚举值，自定义后的值，需要一次往下递增
    enum Role2 {
        Reporter == 1, //1
        Developer, //2
        Main,   //3
        Owner,  //4
        Guest,  //5
    }
```
+ 打印一下Role，是个对象。可以根据key和value索引

![](https://user-gold-cdn.xitu.io/2019/9/1/16ceaa7fb1d948c7?w=416&h=400&f=png&s=43157)

+ 枚举的实现原理：反向映射,看下图

![](https://user-gold-cdn.xitu.io/2019/9/1/16ceaaa67b7ce2fd?w=2092&h=362&f=png&s=101967)

### 字符串枚举
```ts
    enum Msg {
        Success = '成功',
        Erros = '失败'
    }
```
+ 字符串枚举不可以反向映射

![](https://user-gold-cdn.xitu.io/2019/9/1/16ceaac7e8e13c8a?w=2026&h=292&f=png&s=65004)

### 异构枚举
+ 就是字符串枚举和数字枚举混用,不推荐使用
```ts
    enum Answer {
        N,
        Y = 'yes'
    }
```

### 枚举成员性质
+ 不能修改定义后的枚举值
```ts
    enum Char {
        //常量枚举
        a,
        b = Char.a,
        c = 1+ 3,
        //需要被计算的枚举成员
        d = Math.random(),
        e = '123'.length
    }
```
+ 常量枚举（三种）:会在编译时编译出结果
  - 没有初始值
  - 对已有枚举成员的引用
  - 常量表达式

+ 需要被计算的枚举成员
  - 在执行时才会计算出结果

+ 看下编译结果
  - 常量枚举：在编译时编
  - 需要被计算的枚举成员：没有编译出结果
![](https://user-gold-cdn.xitu.io/2019/9/1/16ceab5dcf82f9c3?w=2044&h=480&f=png&s=95498)

### 常量枚举
+ 用const声明的枚举
```ts
    const enum Month {
        Jan,
        Feb
    }
```
+ 会在编译阶段会被移除

![](https://user-gold-cdn.xitu.io/2019/9/1/16ceab88caf99e23?w=2242&h=332&f=png&s=25772)


### 枚举类型
```ts
    enum E {a,b} //没有值
    enum F {A=0,B=1} //数字枚举
    enum G {a='a',b='b'} //字符串枚举
```