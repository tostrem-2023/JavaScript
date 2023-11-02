const someVariable = (function() {  // variable, not a function
    return 100;
})();
console.log(someVariable);

const sum = function (x, y) {   // defining a function (function declaration) and assigning a variable
    return x + y;
}

const variable = (function() {
    return 100;
}());
console.log(variable());