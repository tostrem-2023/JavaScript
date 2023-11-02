// arithmetic operators
var x = 12, y = 13;
console.log( 10.5 + 20.25 ); // "+" can be used to add or to concatenate strings
console.log( x - y );
console.log( x * y );
console.log( x / y );
console.log( x % y );
console.log( y % x );

// relational operators
var isBefore = "hello" < "hi";
console.log ( isBefore );
var isBefore = "hello" > "hi";
console.log ( isBefore );
var isGreater = 10 > 9;  // no quotes for numerical comparison; use quotes for alphabetical
console.log ( isGreater );
console.log ( x <= y );
console.log ( x >= y );
console.log ( x == y );
console.log ( x != y ); // not equal to
console.log ( 1 == "1" ); // == compares 2 operands w/o considering data types --> BE CAREFUL HERE
console.log ( 1 === "1" ); // === compares 2 operands AND considers data types --> Result is false because number and string cannot be compared; use triple equals
console.log ( x !== y ); // x does not equal y

// logical operators
var isRaining = true, goingByWalk = true, goingByCar = false;
var takeUmbrella = isRaining && goingByWalk; // && compares two boolean values - if both values are true, true value is returned
console.log ( takeUmbrella );

var priceOfPhone = 42000, bankBalance = 60000, amIInterested = true;
var willIBuyPhone = priceOfPhone < bankBalance && amIInterested;
console.log ( willIBuyPhone );

var priceOfPhone = 42000, bankBalance = 20000, friendBankBalance = 80000, amIInterested = true;
console.log ( priceOfPhone < bankBalance || priceOfPhone < friendBankBalance );
console.log ( !true );

// miscellaneous
var name = "John", message = 'Good morning';
console.log( message + " " + name );
console.log ( typeof isRaining ); // boolean

var City = "Spokane";
var isTrafficBad = City === "Bangalore" ? "Yes" : "No"; // if or
console.log ( isTrafficBad );

console.log ( 1 + 2 + 3 * 4 ); // PEMDAS followed, then left to right in JS
console.log ( 1 + ( 2 + 3 ) * 4 );

var num1 = 3, num2 = 7
var value = ( num1 + num2 ) >= 10 ? num1 : num2;
console.log ( value );

var value1 = "Hi", value2 = 44, value3 = null;
console.log (typeof(value1), typeof(value2), typeof(value3));

console.log(6-4%3/5**2*3); // minus operator has lowest precedence, all others have the same. % = Remainder