console.log(x);  // value of x not defined at this line --> returns "undefined"
var x = 1; // value assigned here
console.log(x);

// test(); // throws error because test is not a defined function until row 6 --> row 6 is a function expression; only "Var test" is hoisted
// var test = function(){
//     console.log("Test Function called")
// };

foo(); // function will be called because of function hoisting in JS
function foo() {
    console.log("food called")
};

bar(); // throws error because bar is declared as variable; behaves the same as variables --> "var bar" is hoisted, but function (assignment) is not.
var bar = function() {   // <-- this is function expression syntax
    console.log("bar called")
};
