let num1 = [40,50,60];
let num2 = [10,20,30,...num1, 70,80,90,100];
console.log(num2);

function add(a, b=200){
    console.log(a+b);
};
add(100);

let name = 'Harry Potter';
let school = 'Hogwarts';
console.log("The famous wizard", name, "from", school, "school.");

function func(n) {
    if (n==6) {
        let number = 2;
    }
    console.log(number); // will throw an error because "let" keyword is block-scoped; "number" variable is defined only within the "if" block and cannot be accessed outside the block.
};
var n1 = 6;
func(n1);