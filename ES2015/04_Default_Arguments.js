// function greeting (message, name) {
//     return `${message} ${name}!`;
// };
// console.log(greeting("Good morning", "John"));
// console.log(greeting("Good morning"));  // returns second value as "undefined" because function is expecting two arguments

// Default value assigned to name; will be used if argument is not passed (row 12)
function greeting (message = "Hello", name = "World") {
    return `${message} ${name}!`;
};
console.log(greeting("Good morning", "John"));
console.log(greeting("Good morning"));  // will use default value for second argument
console.log(greeting());
console.log(greeting(undefined, "Tracy"));

function func(one="Hi", two) {
    console.log(`${one} ${two}`);
};
func(undefined,"world");