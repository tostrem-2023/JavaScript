function test (x, y) {
    if (typeof x === 'number' && typeof y === 'number' && y > 0) {
        return x / y;
    } else {
        throw new Error ("Only numbers are allowed and divisor should be greater than 0.")
    } }
try {
    var x = 40;
    var y = 0;
    console.log("Answer after dividing x by y, result is:", test(x, y));
} catch (error) {
    console.log(error.message);
}