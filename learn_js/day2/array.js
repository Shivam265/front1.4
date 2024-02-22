/* array is collection of deffrent type in stored in data orderd of collection data and array mutable */

// arr = [2, 4, 5];
// console.log(typeof arr);

// arr2 = new Array();
// console.log(typeof arr2);
// console.log(arr2);

// arr = [2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15];
// console.log(arr[0]);
// console.log(arr[6]);

// array is mutable and change the value//
// arr[0] = 1;
// console.log(arr);

// arr = [11, 12, 13, 14, 15, 16, 17, 18];
// console.log(arr);

// arr.push(19);
// console.log(arr);

// arr = [11, 12, 13, 14, 15, 16, 17, 18];
// console.log(arr);
// /* array is multiple element stored in array*/
// arr.push(19, 20, 21, 22, 23);
// console.log(arr);

/* unshift method  used in add element in start array add*/

// arr = [11, 12, 13, 14, 15, 16, 17, 18];
// arr.unshift(24);
// console.log(arr);

/* pop method remove end array remove elelment */
// arr = [11, 12, 13, 14, 15, 16, 17, 18];
// console.log(arr.pop());
// console.log(arr);

/* shift method*/

// arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.shift());
// console.log(arr);

/* concat method */

// let a1 = [1, 2, 3, 4, 5];
// let a2 = [11, 12, 13, 14];
// let r = a1.concat(a2);
// console.log(r);

// // size of the array//
// console.log(a1.length);

// /* convert array into string*/
// chr_arr = ["r", "o", "h", "i", "t"];
// //join//
// console.log(chr_arr.join());
// console.log(chr_arr.join(""));
// console.log(chr_arr.join("$"));
// console.log(typeof chr_arr.toString());

/* slicing of the array */

// let num = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13];
// console.log(num.slice(3, 6));
// console.log(num.slice(-2, -7));
// console.log(num.slice(-4, -7));
/* does not change modify the existing array*/
// console.log(num);

/* splicing,the modify array and (2,2) start element from index 2 and delete  element after two element in remove and add the value in original array modify*/

// let numbers = [1, 2, 3, 4, 5, 6];
// let remove = numbers.splice(2, 3, 11, 12, 13, 14, 15);
// console.log(remove);
// console.log(numbers);

/* reverse a given array */

// let num = [2, 3, 4, 5, 6, 7];
// num.reverse();
// console.log(num);

// let num = [2, 3, 4, 5, 6, 7];
// console.log(num.indexOf(4));
// console.log(num.lastIndexOf(7));

/* sorring the array*/
let my_arr = [2, 6, 4, 8, 1, 10];
my_arr.sort((a, b) => a - b);
// reverse order//
my_arr.sort((a, b) => b - a);
console.log(my_arr);
