const variable = function () {
    return 200;
};
console.log(variable());

var a = 1;
var b = 3;
function f() {
    console.log (a);
    console.log (b);
}
f();
console.log(a);
console.log(b);

var sholay = {
    name: "Sholay",
    cast: "Amitabh",
    year: 1975
}
delete sholay['year'];
console.log(sholay);

var oneObj = {Song: "Prayer", Year: 2021};
var twoObj = {Song: "Prayer", Year: 2021};
console.log(oneObj==twoObj); // objects are reference types in JS. This comparison checks if the two refer to the same memory location, which is false.
console.log(oneObj===twoObj); // Also false because oneObj and twoObj are distinct objects in different memory locations, the result is false.

const sum = (function(x,y){
    return x+y;
})(10,20);
console.log(sum);
const sumAgain = function(x,y){
    return x+y;
}
console.log(sumAgain);
console.log(sum==sumAgain);  // Returns false because sum and sumAgain are two different functions, even though they return the result.