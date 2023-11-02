function foo (callback) {  // foo function is really an object
    var x = 10, y = 20;
    var z = x + y;
    callback ()    
}

function bar () {
    console.log("Bar called");
}

foo (bar);  // bar function is passed to foo function as "callback"
// ************************


function foo (callback) {  
    var x = 10, y = 20;
    var z = x + y;
    callback ()    

    function returnFunc () {
        console.log("ReturnFunc is called");
    }
    return returnFunc;
}

function bar () {
    console.log("Bar called");
}

var resultFunc = foo (bar); 
resultFunc();