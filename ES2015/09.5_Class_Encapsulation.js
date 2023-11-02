class Person {
    constructor (name, age) {
        let _name  = name;
        let _age = age;
        this.getName = function () {
            return _name;
        }
        this.setName = function (newName) {
            if (typeof(newName) === 'string') {
                _name = newName;
            }
        }
    }
    get name() {
        return this.getName(); 
    }
    set name (newName) {
        return this.setName(newName);
    }
}

let person1 = new Person ("Nolan", 7);
// console.log (person1._name);  // will result in "undefined" because access is restricted outside the class  
// console.log (person1._age);   // will result in "undefined" because access is restricted outside the class
// console.log (person1.getName());
// console.log (person1.name);

person1.setName("Tracy"); // If number is passed, previous name will be given because row 9 specifies argument must be a string
person1.name = "Ellie";  // Easier to pass new name via rows 17 & 18
console.log (person1.name);

// person1._name = "Spencer";
// console.log(person1._name);   // will return "undefined, undefined, Spencer" because Spencer is independent of what is inside the class