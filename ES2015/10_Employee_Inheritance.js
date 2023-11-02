class Person {
    constructor (name, age) {  // Only on constructor per class
        // console.log(this);  <-- newly created object
        this.name  = name;
        this.age = age;
    }
    celebrateBirthday () {
        this.age++;
    }
};

class Employee extends Person {  // "Employee" inherits data methods from "Person"
    constructor (name, age, role, school) {
        super (name, age);  // "Super" refers to parent class constructor properties/methods
        this.role = role;
        this.school = school;
    }
    promote () {   // Adding method
        this.role = "Graduate " + this.role;
    }
    celebrateBirthday () {
        super.celebrateBirthday();  // calling parent "celebrateBirthday" method
        console.log ("Happy birthday");
    }
};

const Ellie = new Employee ("Ellie", 8, "Student", "TES");
console.log (Ellie);
Ellie.promote ();
console.log(Ellie);

Ellie.celebrateBirthday();
console.log (Ellie);