class Person {
    constructor (name, age) {
        // console.log(this);  <-- newly created object
        console.log(this);
        this.name  = name;
        this.age = age;
    }
    celebrateBirthday () {
        this.age++;
    }
}

const John = new Person ( 'Tracy', 39);
console.log(John);

John.celebrateBirthday();
console.log(John);