console.log (sum (20 ,30));
// Functions - Declaration (gives info about function's name, return type and parameters. Once declared, it can be used anytime inside a class or development scope once invoked.)
function sum ( x, y) {
    var result = x + y;
    return result;
}
var result = sum( 12, 13 );
console.log ( "Result is:", result);


// Functions - Expression syntax (variable declaration and assignment. Useful when assigning objects; default choice)
var sum2 = function( x, y ) {
    var result = x + y;
    return result;
}
console.log ( sum2 ( 15, 20 ));

function findAccomodation () {
    var accomodationInfo = "";
    findAccomodationFromInternet ();
    ContactAccomodationPlaces ();
    accomodationInfo = GetInfoFromAccomodationPlaces();
}
// findAccomodation();

function sum_2(){
    var x = 200;
    var y = 300;
    var z = x + y;
    console.log (z);
    return z;
}
var result = sum_2();
console.log(result);