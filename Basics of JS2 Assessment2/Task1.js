// 1. Define and invoke an anonymous function which takes a number and returns its square.
// If input is 2, output should be 4.
(function (num){
    function square(x){
        var result = x ** 2;
        console.log(result);
    }
    square(2);
}());


// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"
var greet = function () {
    var a = "Harry";
    return a;
}();
console.log("Hello " + greet + ", welcome to Great Learning!");


// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.
var globalArr = [2, 4, 6];
var incFunc = function () {
    for (var i=0; i<globalArr.length; i++) {
        var newArr = globalArr.map(function(num) {
            return num + 2;
        });
    }
    return newArr;
}();
console.log(incFunc);


// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.
var course = {
    courseName: "Computer Science",
    durationInMonths: 24,
    level: "Beginner",
};
console.log(course);
Object.assign(course.level = "Intermediate");
console.log(course);


// 5. Given an array "students" of JSON objects write a code to iterate through each of these codes and extract first name and last name of each students.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

function fn () {
    var fullName = [];
        for (var i=0; i<students.length; i++){
            var x = students[i].firstName;
            var y = students[i].lastName;
            fullName.push(x + " " + y);
        };
    return fullName;
};
var ans = fn();
console.log("5:", ans);


// 6. Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array
var db = function doubleNumber(num) {
    return num * 2;
};

var arr = [5, 10, 15, 20, 25];

function doubledArray () {
    var newArray = [];
    for (i=0; i<arr.length; i++) {
        x = db(arr[i]);     
        newArray.push(x);
        };
    return newArray;
};

var result = doubledArray();
console.log("6:", result);



// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).
(function multiplyBy(num) {
    var a = num * 5;
    console.log("7:", a);
}) (5);



//8. Using the `call` method, write a function that finds the maximum number in an array.
var numArray = [10, 25, 150, 35, 18, 90];
function maxNum (numArray) {
    return Math.max.apply(null, numArray);
};
var result = maxNum.call(this, numArray);
console.log("8:", result);



//9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.
var car = {};
car.make = "Toyota"; car.model = "Camry";
console.log("9:", car);



//10. Given an array "students" of JSON objects define a function displayByKey which takes this array object 
// and a keyName as string and displays the value of the key for each of the JSON objects.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
function displayByKey(studentsObj, keyName) {
    for (var i=0; i<studentsObj.length; i++) {
        console.log(studentsObj[i][keyName]);
    }
};
displayByKey(students, "firstName");
