// Looping

for ( var x = 5; x >=0 ; x-- ){
    var y = " ";
    for ( var z = x; z>0; z--) {
        y+= "*";
    }
    console.log ( y );
}

for ( var x = 0; x <= 5; x++ ) {
    var y = " ";
    for ( var z = 0; z <= x; z++ ) {
        y+= "*";
    }
    console.log ( y );
}