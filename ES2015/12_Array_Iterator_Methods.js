// forEach() method
var days = [
    {day: "Sunday", hours: 0},
    {day: "Monday", hours: 8},
    {day: "Tuesday", hours: 7},
    {day: "Wednesday", hours: 6},
    {day: "Thursday", hours: 7.5},
    {day: "Friday", hours: 8.5},
    {day: "Saturday", hours: 0}
];

days.forEach(function(item) {  // forEach = called for each item, in the order of array
    console.log(item);
});

var objs = [
    {name: "One", val: 1},
    {name: "Two", val: 3},
    {name: "Three", val: 5}
];
objs.forEach(function(item){
    console.log(item.val);
});

// Filter method  --> Used to pick out subset of array items
var resultDays = days.filter(function(item) {
    // return true; -- > Returns all items
    // return false; --> Returns empty array
    return item.hours > 5; // Returns only days where "hours" value is > 5
});
console.log(resultDays);