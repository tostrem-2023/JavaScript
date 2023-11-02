for (var x = 1; x <=20; x++){
    console.log (x);
}

function checkLeapYear(year){
    if ((year % 4 == 0) || (year % 400 == 0)) {
        console.log (year + " is a leap year");
    } else {
        console.log (year + " is not a leap year.");
    }
}
checkLeapYear(2020);

console.log (typeof 543267109823n);

var a = "Hello";
function foo(){
    var a = "Hello again";
    console.log(a);
}
foo();

var isSunday = true;
var isSaturday = false;
var isWeekend = isSunday || isSaturday;
console.log (isWeekend);

var object = {
    color: "White", shape: "Circle"
}
if('length' in object === false);
object.length=10;
console.log(object.length);

var one = 0;
var two = 0;
while (one < 3) {
    one++;
    two+= one;
    console.log (two);
}

var num = 6
var result = 0
switch(num){
    case 5: result+=num;
    case 6: {
        result+=num;
    }
    case 7: {
        result+=num;
        break;
    }
}
console.log (result);
