// Global variable = Can be used anywhere
var global_x = 1;
console.log( "Outside of functions global_x = ", global_x );

// Local variable
function foo() {
    var local_foo_x = 2;
    console.log ("Inside foo, global_x = ", global_x );
    console.log ("Inside foo, local_foo_x = ", local_foo_x );

    function bar() {
        var local_bar_x = 3;
        console.log ("Inside bar global_x = ", global_x );
        console.log ("Inside bar, local_foo_x = ", local_foo_x );
        console.log ("Inside bar, local_bar_x = ", local_bar_x );
    }
    bar ();
}
foo(); // calling the function foo --> prints console.log from foo function


var x = 1;
function f(){
    function g(){
        console.log(x);
    }
    g();
    console.log(x);
}
f();