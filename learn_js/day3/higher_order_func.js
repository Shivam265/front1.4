// higher order function in operation//
function operation(operatorfn, a, b) {
  return operatorfn(a, b);
}

function add(a, b) {
  return a + b;
}

let result = operation(add, 5, 7);
console.log(result);

function getgreetMethod() {
  return function () {
    console.log("hello student");
  };
}

let greetfn = getgreetMethod();
console.log(typeof greetfn);

greetfn()
