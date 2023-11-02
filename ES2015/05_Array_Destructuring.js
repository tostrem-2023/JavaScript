const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
];

// Row 11 works, but is more manual work
// const first = days[0], second = days[1], third = days[2], fourth = days[3], fifth = days[4];

// Preferred method in Row 15 because less work in assigning variables to an array
//const [first, second, third, fourth, fifth] = days;
//console.log(first, second, third, fourth, fifth);

// If you want to skip an item, add a comma in the location you want to skip
const [first, second, third, fourth, fifth, , seventh] = days;
console.log(first, second, third, fourth, fifth, seventh);

// Can also set default values in const. Ex: const [first, second = "Holiday", third, etc.]

// let c;
// let [a, b] = [10, 20];
// [a, b, , c] = [30, 40, 50, 60, 70];
// console.log(a,b,c);

// let c;
// const [a, b] = [10, 20];
// [a, b, , c] = [30, 40, 50, 60, 70];
// console.log(a, b, c);   --> Throws error because const variables a & b cannot be reassigned

const nums = [30, 40, 50, 60, 70, 80];
const [a, b, , c, d, e, , f] = nums; // a = 30, b = 40, 50 = skipped, c = 60, d = 70, e = 8, f = undefined
console.log(a, b, c, d, e, f);