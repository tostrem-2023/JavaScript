// Method 1: Print Method
function print (shape, value) {
    console.log (shape, value);
};

// Method 2: Square Method
function square (x, print) {
    print("Area of square is:", x*x); // first parameter is a string ("Area of square is", second parameter is to print the calculated area)
};

// Method 3: Rectangle Method
function Rectangle (y, z, print) {
    print("Area of rectange is:", y*z);
};

// Method 4: Circle Method
function circle(r, print) {
    print("Radius of cirle is:", 3.14*r*r);
};

square (4,print);
Rectangle (2,5,print);
circle (3, print);