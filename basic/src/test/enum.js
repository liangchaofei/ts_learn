/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 10:20:06
 * @LastEditTime: 2019-09-01 10:50:14
 * @LastEditors: Please set LastEditors
 */
//枚举类型
// 数字枚举
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Main"] = 2] = "Main";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter); //0
console.log(Role);
// 自定义数字枚举
var Role2;
(function (Role2) {
    Role2[Role2["Reporter"] = 1] = "Reporter";
    Role2[Role2["Developer"] = 2] = "Developer";
    Role2[Role2["Main"] = 3] = "Main";
    Role2[Role2["Owner"] = 4] = "Owner";
    Role2[Role2["Guest"] = 5] = "Guest";
})(Role2 || (Role2 = {}));
console.log(Role2.Reporter); //1
console.log(Role2.Developer); //2
//字符串枚举
var Msg;
(function (Msg) {
    Msg["Success"] = "\u6210\u529F";
    Msg["Erros"] = "\u5931\u8D25";
})(Msg || (Msg = {}));
// 异构枚举：数字枚举和字符串枚举混用
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
//枚举成员
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
//枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["A"] = 0] = "A";
    F[F["B"] = 1] = "B";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "a";
    G["b"] = "b";
})(G || (G = {}));
