// var company = {
//     organisation: "Charles Ltd.",
//     address: "France"
// }
// var person = {
//     name: "John Thomas"
// }
// Object.setPrototypeOf(person, company);
// company.organisation = "Harley & Sons";
// console.log(person.name, person.organisation, person.address);
// Returns: John Thomas Harley & Sons France


// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.employmentStatus = "Not working"
// }
// Person.prototype.changeEmploymentStatus = function () {
//     if (this.employmentStatus == "Not working") {
//         this.employmentStatus = "Working";
//     } else {
//         this.employmentStatus = "Not working";
//     }
// }
// Person.prototype.displayStatus = function() {
//     console.log(this.name, "is", this.employmentStatus);
// }
// var john = new Person ("John", 29);
// var tony = new Person ("Tony", 35);
// tony.changeEmploymentStatus();
// john.displayStatus();
// tony.displayStatus();
// Returns: John is Not working Tony is Working


function display (msg) {
    return new Promise (( resolve, reject) => {
        if( msg != null) {
            console.log(msg);
            resolve(msg);
        }
        reject(new Error("Message not provided"));
    });
}
let promise = display("Hello Everyone!");
promise 
    .then((result) => {
        console.log("Success!");
        return result;
    })
    .then((value) => {
        console.log(`The message ${value} displayed successfully`);
    })
    .catch((error) => {
        console.log(error.message);
    })