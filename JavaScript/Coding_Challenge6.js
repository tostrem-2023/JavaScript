// Branching

var priceOfPhone = 30000, bankBalance = 25000;
if ( priceOfPhone < bankBalance ){
    console.log ( "I can buy this phone." )
} else {
    console.log ( "I can't buy this phone. ")
}

var priceOfPhone = 30000, bankBalance = 25000, creditLimit = 3000;
if ( priceOfPhone <= bankBalance + creditLimit ){
    console.log ( "I can buy this phone." );
} else {
    var RemainingDue = priceOfPhone - bankBalance - creditLimit;
    console.log ( "The balance due is:", RemainingDue);
}