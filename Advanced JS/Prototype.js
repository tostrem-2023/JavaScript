var obj = {
    x: 1  // x is an "own property" of obj
};

var proto = {
    y: 2
};

console.log( Object.getPrototypeOf(obj)); // properties of this object are not enumerable so nothing is printed
console.log( obj.__proto__ );

Object.setPrototypeOf( obj, proto );  // Because we set proto as prototype of obj, prototypes of proto are inherited to obj
console.log(obj);

console.log(obj.y);

var obj2 = {
    z: 3
};
Object.setPrototypeOf( obj2, proto );
console.log(obj2.z); // returns 3
console.log(obj2.y); // returns 2

proto.y = 100; // both obj and obj2 will have prototype "100" because we modified proto which is set on both obj and obj2