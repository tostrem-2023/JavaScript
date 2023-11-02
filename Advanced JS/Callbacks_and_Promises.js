const sum = ( x, y ) => {
    const promise = new Promise ( ( resolve, reject ) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            return reject (new Error ('Both arguments must be numbers.'));
        };
        setTimeout( () => {
            resolve ( x + y ); 
        }, 2000);
    });

    return promise;
};

const promise = sum( 10, 20 );
promise
    .then( (result) => {
        console.log(result);
        return sum(result, 30)})   // no semi colon because continuing then or catch handlers
    .then( (value) => console.log(value))  // no semi colon because continuing then or catch handlers
    .catch(  error => console.log(error.message));

// Creates "callback hell" -> too many nested functions
// console.log(sum(10, 20, function (result) {
//     console.log(result);

//     sum(result, 30, function (result) {
//         console.log(result);
//     })
// }));