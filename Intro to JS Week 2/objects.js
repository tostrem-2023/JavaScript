// Object Literal Syntax
// "{}" tells JS it's an object

var obj = {
    a: "Hello", // "a" is the key, then colon, then value, then comma
    b: "Bye",
    c: 1234,
    d: function name() {   // actually considered a method (function inside of an object = method)
        console.log ("Hello again");
    },
    e: {
        a: "Hello a third time",
    }
}
console.log(obj);

console.log(obj.a);
console.log(obj.e.a); // use "." to print value, use parenthesis to execute a function