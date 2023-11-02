var a = 1;
var b = 3;
function f() {
    var b = 2;
    console.log(a);
    console.log(b);
};
f();
console.log(a);
console.log(b);