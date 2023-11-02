// alert() dialog is a blocking method -> will not proceed to next line of code until user acknowledges alert (clicks "ok").
alert ("This is for your information.");
console.log("After alert is clicked by user.")

// confirm() dialog is a blocking method -> takes boolean answer (yes/no, proceed/cancel, etc.); contains 2 buttons
confirm ("Do you really want to leave this page?");
var result = confirm ("Do you really want to leave this page?");
console.log(result);

// prompt () dialog is a blocking method -> takes input from user via text box and returns it as a string. If "cancel" is selected by user, "null" is returned.
var result = prompt ("Enter your favorite city", "Seattle");
console.log(result);