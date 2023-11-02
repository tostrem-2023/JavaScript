var sholay = {
    // objects can be blank and contain no data
};
console.log (sholay);

var sholay = {
    name: "Sholay",
    cast: ["Brad", "Jennifer", "Angelina", "Margot"],
    "Box Office Stats": {  // key names require quotes if there are spaces, periods, numbers or percentage symbols in your name
        countries: 10,
        collection: 12300000,
    },
    addToCollection: function( amount ) {  // value of object can also be a function
        sholay["Box Office Stats"].collection += amount; // =+ means add what's left of "+=" to what's right of it
    }
}; 
console.log (sholay.name);
console.log (sholay.cast[1]);
console.log (sholay["Box Office Stats"]["collection"]);
console.log (sholay); 

sholay.addToCollection( 350000 );
console.log (sholay);

sholay.villain = "Gabbar Singh";  // Adding a property after object executed
console.log(sholay);

sholay.addToCast = function (newMember) {
    this.cast[this.cast.length] = newMember;
};
sholay.addToCast( "Sanjay" );
sholay.addToCast( "Amjad" );
console.log(sholay);

delete sholay["Box Office Stats"];
console.log(sholay);

var personDetails = {
    name: "Harry",
    school: "Hogwarts",
    friends: ["Ron", "Hermione"],
    "Family Details": {
        fatherName: "James Potter",
        motherName: "Lily Potter",
        godfatherName: "Sirius Black"
    }
}
console.log("School:",personDetails.school);
console.log("Friends:", personDetails.friends[0], "and", personDetails.friends[1]);
console.log("Godfather Name :",personDetails["Family Details"].godfatherName);