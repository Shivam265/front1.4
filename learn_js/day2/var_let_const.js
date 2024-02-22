/* 1: it is used to define a variable
2: it has function scope but no block scope

3:it is hoisted */
//1
// function f1() {
//   var i = 5;
//   console.log(i);
// }
// console.log(i);

//2
// {
//   var i = 10;
// }

// console.log(i);

/*3  hoisted top  level define but not initilioization and var is hoisted support*/
// console.log(i);
// var i = 5;
// console.log(i)

/* let  is not hoisted support  it has block scope */

// console.log(i);

// let i = 20;

// {
//   let name = "mohit";
// }

// console.log(name);

// const variable are final value can't be re-assign a value
const country = "india";

country = "usa";
console.log(country);
