/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 18:20:57
 * @LastEditTime: 2019-09-03 09:20:12
 * @LastEditors: Please set LastEditors
 */
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.run = function () { };
    return Dog;
}());
console.log(Dog.prototype);
var dog = new Dog('aa');
console.log(dog);
