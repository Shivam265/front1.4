// const person = {
//   name: "rohit",
//   age: 23,
//   city: "grgm",
// };

// // accessing the data two types //
// // object,dot notation in value access//
// console.log(person.name);
// // key using in value accesss
// console.log(person["name"]);

// //adding data to the object ,dot notaion in value added//

// person.country = "india";
// // key is added the value//
// person["distict"] = "kanpur";
// console.log(person);

// /* delete object keys and object itself */
// delete person.distict;
// console.log(person);

// delete person["country"];
// console.log(person);

let person = {
  name: "rohit",
  age: 23,
  addredd: {
    city: "kanpur",
    state: "uttar pradesh",
  },
};

for (let key in person) {
  // object key,value access in both//
  console.log(key, "=>", person[key]);
}
// object in key access//
console.log(Object.keys(person));
// object in value access//
console.log(Object.values(person));

// Get both key and values//
// entries the entire object//
console.log(Object.entries(person));

/* cloning an object using  assign*/

const new_person = Object.assign({}, person);

console.log(new_person);
// object the added the key and some additional fetures addedd// 
const new_person_1 = Object.assign({ role: "Developer" });
console.log(new_person_1);
