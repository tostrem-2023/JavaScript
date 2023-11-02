const person = {name: "Harry"};
person.age = 12;
console.log(person);

// function show (...values){
//     return values;
// };
// let a = show(10, 20, 30);
// console.log(a);

function show(...args) {
    let product = 1;
    for (let i of args) {
        product *=i;
    };
    console.log("Product = " + product);
};
show(10,20,30);

let c = [100, 200, 330, 400];
let [a,, ...b] = c;
console.log(a,b);

function product (a=1, b=1) {
    console.log(a*b);
};
product (10, 2);
product (10);
product (undefined, 2);
product ();

function defaultArg (weekday='Sunday', daytime='morning'){
    return weekday + ' ' + daytime;
};
console.log(defaultArg(undefined, 'evening'));

let arrayItems = [3, 5, 7, 9, 11, 13, 15];
let [x, y, , ...z] = arrayItems;
console.log(y);
console.log(z);