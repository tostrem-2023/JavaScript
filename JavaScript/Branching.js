var priceOfPhone = 42000, bankBalance = 20000;
if( priceOfPhone < bankBalance ) {
    console.log( "All ok. Process payment.")
} else {
    console.log ("Sorry, you do not have sufficient funds.")
}
console.log ("Transaction over." );

var priceOfPhone = 42000, bankBalance = 20000, creditLimit = 40000;
if( priceOfPhone < bankBalance ) {
    console.log( "All ok. Process payment.")
} else if ( priceOfPhone < creditLimit ) {
    console.log ("Bank payment failed. Processing credit card.")
} else {
    console.log ("Sorry, you do not have sufficient funds.")
}
console.log ("Transaction over." );

// Switch statements
var chocolate = "Hersheys", quantity;
switch ( chocolate ) {
    case "Dairy Milk": 
        quantity = 5;
        break;
    case  "Hersheys":
        quantity = 50;
        break;
    case  "M&Ms":
        quantity = 1;
        break;
    default:
        quantity = 2;
}
console.log ( quantity );

