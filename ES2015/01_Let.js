// let x = 1;
// console.log(x);
// let x = 2; // not allowed because let cannot be redeclared
// console.log(x);

var y = 1; // var variables can be redeclared
console.log(y);
var y = 2; 
console.log(y);

if (true) {
    let x = 1;  // block-scoped
    var y = 1;  // global variable because this block is not within a function
};
// console.log(x); // returns error "x if not defined" because let is block-scoped (cannot be read outside brackets)
console.log(y);

console.log (x); // will throw variable because x is not defined until line 19
let x = 1;
console.log (y); // will return "undefined" rather than error because of var
var y = 2;