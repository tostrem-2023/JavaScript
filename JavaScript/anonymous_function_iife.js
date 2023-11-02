const sum = function( x, y, logResult ) {
    var result = x + y;
    logResult (result);
};

var func = function (x, y, f) {
    f(x+y);
}
function print(result) {
    console.log (result);
}
func(5,4,print);

// Immediately Invoked Function Expression (IIFE)
(function() {
    var x = 100;
    const sum = function(x, y, cb) {
        var result = x + y;
        cb (result);
    };
    sum (10, 20, function(result) {
        console.log(result);
    });
})(); // equal to calling the function by enclosing in parenthesis, then adding empty parenthesis

(function (num){
    function square(x){
        var result = x ** 2;
        console.log(result);
    }
    square(5);
}());