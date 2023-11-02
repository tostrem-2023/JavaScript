console.log (Number.parseInt("3.56", 10)); // Takes input as string and parses as integer (no decimal)
console.log (Number.parseInt("abcdef", 16)); // Ditto

console.log (Number.parseFloat("3.56", 10)); // Will pass as decimal value

// 10 represents decimal (base is 10)
// 16 represents hexadecimal (base is 16; groups binary numbers which makes it easier to read, write & understand)

var wrappedNumber = new Number(3.5678); // The toFixed() returns a string w/ the number w/ specified number of decimal values (rounds off)
console.log(wrappedNumber.toFixed(2)); // Rounds row 9 to 3.57
console.log( 3.5678.toFixed (3)); // Rounds 3.5678 to 3.568
        // Can apply method to this number because "Number" is an object

var x = 1 / 'hello' // NaN (Not a Number)
console.log( Number.NaN);
console.log (NaN);
console.log (x);
console.log( NaN === 1);
console.log( NaN === NaN );
console.log( isNaN( 1 / 'hello'));
console.log((1 / 'a') === NaN );

console.log(Number.parseInt("a", 16));

console.log(Number.isNaN(1/'a'));
console.log((1/'a') === NaN);