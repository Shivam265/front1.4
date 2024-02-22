/* destructuring in array*/

const nums = [1, 2, 3];
const [a, b, c, d] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const [p, q, r] = [1, 2, [4, 5, 6]];
console.log(p);
console.log(q);
console.log(r);

// destructuring is an object//

const per = {
  age: 24,
  name: "mohit",
  city: "kannauj",
  address: {
    city: "banglore",
    state: "kernatka",
  },
};

const {
  name,
  age,
  address: { city, state },
} = per;
console.log(name);
console.log(age);
console.log(city);
