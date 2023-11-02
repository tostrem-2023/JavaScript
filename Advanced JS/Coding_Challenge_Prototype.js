function square (x) {
    print("Area of square is: ", x * x);
};

function rectangle (w, l) {
    print("Area of rectangle is: ", w * l);
};

function circle (radius) {
    print("Aread of circle is: ", 3.14 * radius * radius);
};

var print = function print (shape, val) {
    console.log(shape, val);
};

Object.setPrototypeOf(square, print);
Object.setPrototypeOf(rectangle, print);
Object.setPrototypeOf(circle, print);

square(5);
rectangle(2, 5);
circle(4);