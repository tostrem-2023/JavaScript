// Example of Map Object using card number as key value to name & age of card holder
// {
//     "1234 5678 9101 1121" {
//         name: "Tracy",
//         age: 39
//     }
// };

// Example of Map Object using domain name and key value to IP address
// {
//     "www.google.com": "173.13.23.67"  // string to string because "." included in IP address
// };

const numbers = new Map ( [ [1, "one"], [2, "two"], [3, "three"] ] );
console.log(numbers.size); // "size" is a method of "numbers" giving you the # of key value pairs (3)
console.log(numbers.entries()); // returns all arrays
console.log(numbers.keys()); // returns only keys (1, 2, 3)
console.log(numbers.values()); // returns only values ("one", "two", "three")

numbers.set(4, "four");
console.log(numbers);

console.log(numbers.get(3)); // MOST IMPORTANT METHOD of a map is to lookup values via "get"!!!

numbers.delete(2);
console.log(numbers);

// numbers.clear() --> Sets back to empty map

for (let [key, value] of numbers) {  // iterates through values using for of loop
    console.log(`${key} = ${value}`);
}