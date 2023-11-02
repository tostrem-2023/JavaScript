const numbers = new Map ( [ [1, 1], [2, 4], [3, 9], [4, 16] ] );
numbers.set(5,25);
console.log(numbers);

class User {
    constructor (name, age=9) {
        this.name  = name;
        this.age = age;
    }
    getData () {
        console.log(this.name + " is " + this.age + " years old!");
    }
};
var user = new User ("foo", 7);
user.getData();

let set = new Set ();
set.add(1);
set.add('1');
set.add({key: 'value'});
console.log(set.size);

class A {
    display () {
        console.log('Class A');
    }
};
class B extends A {
    display () {
        super.display ();
        console.log('Class B');
    }
}
var ob = new B ();
var output = ob.display();

class Person {
    constructor (name) {
        this.name = name;
    }
    greet () {
        console.log(`Hello', ${this.name}!`);
    }
}
class Student extends Person {
    constructor (name, major) {
        super (name); // "super" method calls the parent class
        this.major = major;
    }
    greet () {
        console.log(`Hello, ${this.name}! You are majoring in ${this.major}`);
    }
}
const student = new Student ('John', 'Computer Science');
student.greet();

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak () {
        console.log(`The animal ${this.name} makes a sound.`);
    }
};
class Dog extends Animal {
    speak () {
        super.speak();
        console.log(`The dog ${this.name} barks.`);
    }
}
const animal = new Animal ('Max');
const dog = new Dog ('Buddy');
animal.speak();
dog.speak();

const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers);
