function sum( x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } 
        throw new Error ("only numbers are allowed as arguments in this function.");
    };

try {
    console.log(sum("Spencer", 13));
} catch (error) {
    console.log(error.message);
}

