// A string is immutable (cannot change value)
var quote = 'With great power comes great responsibility.';
var pieceOfTheQuote = quote.substring( 10, 20 );  // sunstring() extracts characters between two indices --> 10th index is blank space before the "p" in power. 20th is "e" in comes and is not included.
console.log(pieceOfTheQuote);

// Replace() does not change the original string. It searches for a string and returns a new string with the replacement enabled. This method does not affect the original string.
var replacedString = quote.replace( 'responsibility', 'electricity bill');
console.log(replacedString);
console.log(quote);

// split() method splits a string into an array of substrings based on the delimiter provided as an argument. This method does not affect the original string.
var fruits = 'apples, oranges, bananas';
var fruitsArray = fruits.split(','); // Delimiter character in the "fruits" string is a comma.
console.log(fruitsArray);

// indexOf() returns the first occurance
var firstIndex = quote.indexOf( 'great' );
console.log(firstIndex);

// lastIndexOf() returns the last occurance
var lastIndex = quote.lastIndexOf( 'great' );
console.log(lastIndex);

// Either indexOf() and lastIndexOf() will return "-1" if match it not found.