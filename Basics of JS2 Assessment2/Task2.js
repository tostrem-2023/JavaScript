// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out only even numbers using the checkEven function and generate a new array of the even numbers.
function checkEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    };
};
// console.log(checkEven(61));

var array = [2, 58, 63, 53, 98, 101, 144];

function filterEvens(array) {
    var arrayOfEvens = [];
    for (i=0; i<array.length; i++) {
        if (checkEven(array[i]) === "Even")
        arrayOfEvens.push(array[i]);
    };
    return arrayOfEvens;
};

var result = filterEvens(array);
console.log("1:", result);


//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.
(function factorial(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result = result * num;
    };
    console.log("2:", result);
})(5);



//3. Implement a function calculate that takes three arguments: a, b, and an operation function. 
//The operation function should accept two parameters and perform a specific mathematical operation like addition, subtraction, multiplication and division. 
//Use call(), apply(), or bind() to apply the operation function to the arguments a and b.
function calculate (a, b) {
    return a + b;
};
var addition = calculate.call(this, 5, 10);
console.log("3:", addition);



//4. Given an array of person objects, define a function to find oldest person object.
persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
function oldestPerson(personsArr) {
    var oldestPerson;
    var maxAge = 0;
    for (i of personsArr){
        // console.log(i) 
        // console.log(maxAge);
    if (maxAge<i.age) { 
        oldestPerson = i; 
        maxAge = i.age; 
        // console.log(maxAge);
    };
    };
    return oldestPerson;  
};
console.log("4:", oldestPerson(persons));

//5.  Create a function that calculates the sum of an array using IIFE function.
var arrSum = [5, 10, 25, 50, 100];
(function sumArray () {
    let sum = 0;
    for (var i=0; i<arrSum.length; i++) {
        sum += arrSum[i];
    };
    console.log ("5:", sum);
}) ();