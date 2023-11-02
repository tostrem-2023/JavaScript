function add (...arg) {
    let result = 0;
    for (let a of arg) result += a;
    return result;
};
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3,4,5));