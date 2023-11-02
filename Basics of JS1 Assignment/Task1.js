//1. Create a variable `isHappy` and assign it a boolean value based on the value of the given String variable `action`, whether it is `Smile` or not.
var action = "Smile";
var isHappy = action === "Smile";
console.log ("1:", isHappy);

// 2. Create a variable `favoriteSubjects` and assign it an array of strings representing your favorite subjects.
var favoriteSubjects = ["math", "history", "art"];
console.log ("2:", favoriteSubjects);

// 3. Write a program to compare two numbers, `num1` and `num2`, and check if `num1` is greater than or equal to `num2`.
var num1 = 10;
var num2 = 5;
console.log ("3:", num1 >= num2);

// 4. Write a program to calculate the square of a given number, `num`.
var num = 4;
console.log ("4:", (num*num));


// 5. Write a program to check if a given number, `num`, is even or odd.
var num = 7;
if (num % 2 === 0) {
    console.log("5: Even");
} else {
    console.log("5: Odd");
}

// 6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or divisible by 4 but not divisible by 100.
var year = 2024;
var days;
if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    days = 366
} else {
    days = 365
}
console.log("6: Number of days in the year:" + days);

// 7. Write a program that checks if a given character, `char`, is a vowel or a consonant.

var char = "a";
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log ("7: Vowel");
} else {
    console.log ("7: Consonant");
}

// 8. Write a program that determines the largest among three numbers, `num1`, `num2`, and `num3`.
var num1 = 10;
var num2 = 5;
var num3 = 8;
var largest;
if (num1 > num2 && num1 > num3) {
    console.log ("8: num1 is the largest number");
} else if (num2 > num1 && num2 > num3) {
    console.log ("8: num2 is the largest number");
} else {
    console.log ("8: num3 is the largest number");
}

// 9. Write a program that determines the sign of a given number, `num` (positive, negative, or zero), using the ternary operator.
var num = -5;
if (num > 0) {
    console.log("9: Positive");
} else if (num < 0) {
    console.log("9: Negative");
} else {
    console.log("9: Zero");
}

// 10. Write a program that determines the grade based on a given percentage, `percentage`. Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).
var percentage = 85;
if (percentage >= 90 && percentage <= 100) {
    console.log ("10: A");
} else if (percentage >= 80 && percentage <= 89) {
    console.log ("10: B");
} else if (percentage >= 70 && percentage <= 79) {
    console.log ("10: C");
} else if (percentage >= 60 && percentage <= 69) {
    console.log ("10: D");
} else {
    console.log ("10: F");
}