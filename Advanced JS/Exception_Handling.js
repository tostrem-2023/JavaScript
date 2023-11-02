try {
    foo ();
    console.log("After foo called (within try block)"); // does not execute because foo is not defined
} catch (error) {
    console.log(error.message)  // Error prints: foo is not defined
} finally {
    console.log("Inside finally block.");
}
console.log("After foo called.") // executes because error is within try block

try {
    foo();
} finally {
    console.log("Finally block called")
};

try {
    foo();
} catch {
    console.log(error.message);
}