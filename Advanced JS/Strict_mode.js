"use strict";  // will not allow row 4 error; will throw error --> strict for all of file

function foo() {
    "use strict";  // strict only for function
    x = 1;           // creates local variable --> example of forgetting creating global variable by accident; will correct in strict mode
};
foo();
console.log(x);