// Scope-Global and local

var a = "Hello"

// declaration phase
function myFunc() {
    var b = "Hello again"  // local variables are not accessible outside of function
    a = "Hello again2"
    console.log(a)
}
// execution phase
myFunc();

function myFunc2() {
    a = "second";
    function nestedFunc () {
        console.log (a); 
    }
    nestedFunc ()
}
myFunc2();