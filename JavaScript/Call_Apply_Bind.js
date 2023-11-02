function greet ( message, name ) {
    console.log(this);
    console.log( message + " " + name + "!");
}
greet ("Good morning", "Spencer");

console.log(greet instanceof Object);

greet.x = 100
console.log(greet.x);

greet.foo = function () {
    console.log ("greet.foo was called");
}
greet.foo();

// Call
greet.call("Hello");

// Apply
var args = ["Good evening", "Ellie"];
greet.apply("Hey", args);
greet.apply(null, args); // Passing "null" does not change context

// Bind
var greetBound = greet.bind("Spencer is chopping vegetables");
greetBound(); // Output is: "String: Spencer is chopping vegetables undefined undefined!" because when greetBound() was called, no arguments were passed.
greetBound("He's wearing an apron")

var greetHola = greet.bind(null, "Hola");
greetHola("Nolan");
greetHola("Spencer");