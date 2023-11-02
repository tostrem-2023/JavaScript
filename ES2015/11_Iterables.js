const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// For ... of Loop (new is ES2015)
for (let item of days) {
    console.log(item);  // Returns all days as individual items
}

const greeting = "Good morning";
for (let character of greeting) {
    console.log(character);  // Returns all letters individually
}