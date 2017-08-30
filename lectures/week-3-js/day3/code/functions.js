function myFunc() {

}

const myFunc2 = function() {
  return arguments[0] + arguments[1];
};

// Arrow functions don't have access to arguments
const myFunc3 = (a) => {};

// If the arrow function does not do anything other than return
// then remove the block.
// If only one parameter is sent to such a a function,
// remove ()
const myFunc4 = a => a + 10;

// Two functions here, an outer functions
// a => (innerFunction)
// a => (b => a + b);
// myFunc4(10)(2) === 12;
// Partial execution is often why we do this
// With partial execution you can setup a function
// before executing the inner component.
// const adder10 = myFunc4(10);
// adder10(2) === 12;
const myFunc5 = a => b => a + b;

// Another syntax for myFunc5 but exactly the same result
// 
function myFunc6(a){
  return function(b){
    return a + b;
  }
}

myFunc5(2)(3);

const add10 = myFunc6(10);
add10(12);
add10(2);

const add1 = myFunc6(1);
add1(10);
