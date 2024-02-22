/* forEach method  used in every element process in js*/

// players = ["sachin", "virat", "dhoni"];
// players.forEach((players) => {
//   console.log(players);
// });

// /* map  => creation of new transformed array and not original array change*/
// arr = [1, 2, 3, 4, 5, 6];
// cube_arr = arr.map((num) => num ** 3);
// console.log(cube_arr);
// /*map method not original array change*/
// console.log(arr)

/* filter method used in new array return after condition check*/

// let arr1 = [1, 2, 3, 4, 6, 7, 8];

// let even_arr = arr1.filter((num) => num % 2 == 0);
// console.log(even_arr);

/* reduce in method */

let arr3 = [1, 2, 3, 4, 5, 6, 7].reduce((curr, next) => curr + next);

console.log(arr3);

