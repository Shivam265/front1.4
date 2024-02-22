// function hello(){
//   let name="rohit"
//   console.log(name)
// }

// hello()

// console.log(name)

function outerfn() {
  let outerVar = "i am from outer in func";
  // function inside the another function holding the innerfn
  function innerfn() {
    console.log(outerVar);
  }

  return innerfn;
}

let fn = outerfn();
// i am still able to called the local variable of outerfn//
fn();

function customerCounter() {
  let count = 0;
  return function () {
    count++;
    console.log("new customer count is", count);
  };
}

let counter = customerCounter();
// i am able to maintain the correct  count// 
counter();
counter();
counter();
