console.log(location);  // global object so it can be logged as window.location or location
console.log(location.protocol);
console.log(location.path);

location = "https://www.google.com";
location.href = "https://www.google.com"; // same as line 5 

location.assign( "https://www.google.com" );

location.replace ("https://www.google.com" ); // replaces history of previous page

location.reload ("https://www.google.com" );