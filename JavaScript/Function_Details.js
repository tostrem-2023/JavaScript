// JS is loose language; number of arguments does not have to match.

function foo ( x, y, z ) {
    console.log ( x, y, z );
    console.log ( "Food was called." );
}
foo ( "Hello" , "World"); // "Hello" assigned by JS to x, "World" assigned by JS to y, z received undefined

function foo ( x, y, z ) {
    console.log ( x, y, z );
    console.log ( "Food was called." );
}
foo ( "Hello" , "World", "Good", "Morning" );

function square ( x, y) {
    var result  = x**2;
    console.log (x,y,result);
}
square(4);

function foo ( x, y, z ) {
    console.log ( x, y, z );
    console.log ( "Food was called." );
    console.log ( arguments );
    console.log (arguments [ 0 ], arguments [ 2 ]);
    console.log (arguments.length);
}
foo ( "Hello" , "World", "Good", "Morning" );