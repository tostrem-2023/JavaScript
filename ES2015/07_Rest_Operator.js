// 1. When declaring function arguments
function foo ( x, y, ...others) {
    console.log(x);
    console.log(y);
    console.log(others); // "...others" groups remaining values and returns array
};

function sort ( ...numbers) {
    console.log(numbers);
    return numbers.sort();
};
const result = sort (14, 78, 45, 10, 67);
console.log (result);

// 2. When array destructuring
const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
];
const [ first, second, ...restOfDays ] = days;
console.log(first, second, restOfDays );

// 3. When object destructuring
const john = {
    name: 'John',
    age: 32,
    emailIds: [
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address: {
        city: 'Seattle',
        zip: 98121
    }
};
// const { name, age, ...otherDetailsOfJohn } = john;
// console.log (name, age, otherDetailsOfJohn);

const { name, address : {city}, ...otherDetailsOfJohn } = john; // will not return zip; cannot be picked up with rest operator because destructured address partially
console.log (name, city, otherDetailsOfJohn);
