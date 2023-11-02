function person (name, age) {
    this.name = name;
    this.age = age;

    // this.celebrateBirthday = function () {  this function moved to row 10 so function isn't created in every new object
    //     this.age++;
    // };
};

person.prototype.celebrateBirthday = function () {
    this.age++;
}

// Spencer = {
//     name: 'Spencer',
//     age: 40,
//     celebrateBirthday: function() {
//         this.age++;
//     }
// };

// Tracy = {
//     name: 'Tracy',
//     age: 39,
//     celebrateBirthday: function() {
//         this.age++;
//     }
// };

// console.log(new person ('Spencer', 40)); // Creates empty object
var Spencer = new person ('Spencer', 40);
Spencer.celebrateBirthday();
console.log(Spencer);

var Ellie = new person ('Ellie', 9);
Ellie.celebrateBirthday();
console.log(Ellie);

console.log(Spencer.__proto__ === person.prototype);
console.log(Ellie.__proto__ === person.prototype);