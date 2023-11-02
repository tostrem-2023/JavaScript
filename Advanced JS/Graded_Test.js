// display1();
// display2();
// function display1() {
//     console.log("In function display1");
// }
// var display2 = function () {
//     console.log("In function display2");
// }
// Returns: In function display1 & TypeError


var school = {
    schoolName: "Hogwarts",
    address: "Scotland"
}
var student = {
    name: "Harry Potter"
}
Object.setPrototypeTo(student, school);

// function display1() {
//     "use strict";
//     var x = 10;
//     function innerDisplay() {
//         console.log(x);
//     }
//     innerDisplay();
// }
// function display2() {
//     y = 20;
// }
// display1();
// display2();
// console.log(y);
// Returns: 10 20


// function display(msg) {
//     return new Promise ((resolve, reject) => {
//         if(msg != null) {
//             console.log(msg);
//             return;
//         }
//         reject(new Error("Message not provided"));
//     })
// }
// let promise = display();
// promise
//     .then(() => {
//         console.log("Success!");
//     })
//     .then(() => {
//         console.log("Success!!");
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
//     .then (() => {
//         console.log("Success!!!");
//     })
//     Returns: Message not provided Success!!!

