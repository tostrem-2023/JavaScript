// A newly created Date class object stores the current date and time of the system the code has been run on. Uses standard time (UK time zone).
var today = new Date();
console.log(today);

// Remember date represents the standard date/time (UK time zone)
var milleniumStart = new Date( 2000, 0, 1); // Months start at zero, so "0" = January // Days start at 1
console.log(milleniumStart);

// Returns "tomorrow" (in UK time zone)
today.setDate( today.getDate() + 1);
console.log(today);

// Returns July 31st @ 7am because PST is 7 hours behind UK
var July31 = new Date ( 2024, 6, 31);
console.log(July31);

// Returns PST by adding hours "-7" -> can also add minutes and seconds
var July31 = new Date ( 2024, 6, 31, -7, 0);
console.log(July31);

// Returns August 1st
July31.setDate( July31.getDate() + 1);
console.log(July31);

const date1 = new Date( 2020, 1, 1);
console.log(date1);

// Getter methods allow us to obtain the currently set values of the properties of an object.
console.log(July31.getMonth());
console.log(July31.getDay()); // Returns "3" because the 31st is on a Wednesday is 2024 (Sunday = 0)

// Setter methods allow us to set the required values of the properties of an object.
var today = new Date ();
console.log(today);
today.setDate(9);
console.log(today);
today.setFullYear(2024);
console.log(today);

console.log(today.toTimeString()); // returns in local time zone

var d = new Date (2020, 0, 1);
d.setDate(33); // Falls outside the # of days in the specified month, so automatically moves to following month -> Returns 2020-02-02
console.log(d);