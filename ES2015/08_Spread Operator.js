// Pass items of an array as arguments when calling a function
const result = Math.max(10, 45, 32, 78, 33, 19);  // Math.max does not accept arrays; accepts only comma separated arguments
console.log (result);

const numbers = [10, 45, 32, 78, 33, 19 ];
const result2 = Math.max (...numbers); // Use spread operator to insert an array and auto separate with commas
console.log(result2);

// Spread items in arrays into comma-separated values
const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ];  // Use the spread operator to combine arrays
console.log(arr3);

// Object spread (not part of ES2015)
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

const johnCopy = {  // Creates a shallow copy --> Primitive data types will be copied by value, non-primitive will be copied as array or object
    ...john
};
console.log(john);
console.log(johnCopy);

// Change to primitive value --> Does not impact original "john"
johnCopy.name = 'Jonathan';
console.log(john);
console.log(johnCopy);

// Change to non-primitive value --> Does impact both "john" and "johnCopy"
johnCopy.emailIds.push('john@xyz.com');
console.log(john);
console.log(johnCopy);