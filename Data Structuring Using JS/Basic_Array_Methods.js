var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

days.sort(); // will arrange items in an array in alphabetical order
console.log(days);

days.reverse(); // will sort in reverse alphabetical order
console.log(days);

console.log(days.indexOf('Monday'));
console.log(days.indexOf('Saturday')); // returns "-1" because Saturday does not exist

var numbers = [ 20, 60, 40, 65, 80, 8, 22, 30, 200, 2, 3500 ]; // will sort numerically by first digit (lexicographically --> alphabetically as strings - think of digits as characters)
numbers.sort();
console.log(numbers);
numbers.sort (function (x, y) {
    return x - y;  // returns numerically sorted array
});
console.log(numbers);

var projects = [
    {hours: 20, name: 'Project 1'},
    {hours: 60, name: 'Project 2'},
    {hours: 40, name: 'Project 3'},
    {hours: 65, name: 'Project 4'},
    {hours: 80, name: 'Project 5'}
];
projects.sort(function (x, y) {
    return x.hours - y.hours;
});
console.log(projects);

days.push('Saturday'); // Adds 'Saturday' to days array
days.push('Sunday');
days.sort();
console.log(days);

days.pop(); // Removes the last element in an array
var removedDay = days.pop(); // Returns removed element when called
console.log(days);
console.log(removedDay);

days.unshift('Holiday'); // Adds element to beginning of array
console.log(days);

days.shift(); // Removes element at the beginning of the array
removedDay2 = days.shift(); // Returns removed element when called
console.log(days);
console.log(removedDay2);

days.push('Friday', 'Tuesday', 'Wednesday');
console.log(days);
days.splice(2, 3); // Removes 3 elements beginning with index 2
console.log(days);

days.splice(2, 0, 'Jan', 'Feb', 'Mar'); // Adds 3 elements (Jan, Feb, Mar) beginning with index 2 w/o removing any elements ("0")
console.log(days);

var slicedDays = days.slice( 0, 4); // Returns a portion of an array as an array - starting index to after last index (last index is not returned) 
console.log(days);
console.log(slicedDays);

const arr = [20, 1, 10, 5];
arr.sort((a, b) => a - b);
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];
const sliced = arr2.slice(1, 4);
const spliced = arr2.splice(2, 1);
arr2.shift();
console.log(arr2, sliced, spliced);