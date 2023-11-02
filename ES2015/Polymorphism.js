// Operator Overloading --> Ability to work in different ways depending on data types. Example: Plus operator.
let a = 1 + 2;
console.log(typeof(a), a);

let b = "Ellie " + "Ostrem";
console.log(typeof(b), b);

let c = "Nolan " + 7;   // Datatype is interpreted as a string.
console.log(typeof(c), c);

// Method Overloading --> Multiple functions with the same name w/ different number of arguments & behavior. Example: "add".
function add(d, e) {
    return d + e;
};

function add(d) {
    return d + 5;
};

console.log(add(1, 2));  // Does not return 3 because second function (row 16) is overriding the first function (row 12); JS does not support method overloading. It is passing only the first argument (1) in Row 16.
console.log(add(5));

// Method Overriding --> Overrides method in child class that is already defined in parent class. Interpreter decides the method to execute based on the type of object.
class Shape {
    draw () {
        console.log("Drawing a shape");
    }
};

class Rectangle extends Shape {  // "Rectangle" is child class of "Shape"
    draw () {
        console.log("Drawing a rectangle");
    }
};

let shape = new Shape ();
let rectangle = new Rectangle ();

shape.draw();  // Invokes draw method of Shape class
rectangle.draw(); // Invokes draw method of Rectangle class

// Polymorphism w/ Functions & Objects --> Achieved by implementing functions w/ the same names and arguments in different objects. Examples: Rectangle vs Square
const rectangle1 = {
    length: 20,
    width: 10,
    area () {
        console.log("Area of Rectangle: " + this.length * this.width);
    }
};

const square1 = {
    side: 25,
    area () {
        console.log("Area of Square: " + this.side ** 2);
    }
};

rectangle1.area();
square1.area();