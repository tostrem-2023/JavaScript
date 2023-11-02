console.log(Math);

console.log(Math.random()); // Return a "floating-point" number between 0 and 1.

console.log (Math.min( 10, 50, 30, 70, 28, 48, 8, 90 )); // Does not accept an array, but accepts comma separated arguments
console.log (Math.max( 10, 50, 30, 70, 28, 48, 8, 90 )); 

var ages = [ 10, 50, 30, 70, 28, 48, 8, 90 ];
console.log(Math.min.apply( null, ages ));

console.log( Math.ceil(3.5)); // Smallers integer greater than or equal to the current value (round up)
console.log( Math.ceil(5));

console.log (Math.floor (3.5)); // Opposite of ceil
console.log (Math.floor (2)); 

console.log (Math.abs (-5)); // Absolute value function
// log, sin, cos, round, trunc, etc.

console.log (Math.pow( 3, 4 )); // Power of function -> first number is base ex: 3 to the power of 4

console.log (Math.round(4.25)); // Rounds to nearest integer