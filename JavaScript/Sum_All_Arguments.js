function sumAll () {
    for (var x = 0, result = 0; x < arguments.length; x++) {
        result = result + arguments[x];
    }
    return result;
}
console.log (sumAll (10,20,30));
console.log (sumAll(10,15));

function sum () {
    var result = 0;
    for(let x = 0; x<arguments.length; x++) {
        result+=arguments[x];
    }
    console.log (result);
}
sum (3,5,2);
    
