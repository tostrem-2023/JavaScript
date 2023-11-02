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

// const name = john.name;  // var using object property
// console.log(name);

// const {name, age : yearsOld, city} = john; // use "age" to search, renamed property is "yearsOld"
// console.log(name, yearsOld, city);  // must then use the new property name "yearsOld" not "age"
// "city" returns "undefined" because it is within the property "address"

// const {name, age : yearsOld, address : {city : residence}} = john; // must first look at address, then use city property that is within address + can also create variable "residence"
// console.log(name, yearsOld, residence); 

// to look up array values, use square brackets within object property
const {name, age : yearsOld, address : {city : residence}, emailIds : [, secondaryEmailId]} = john; 
console.log(name, yearsOld, residence, secondaryEmailId); 