// JSON: Javascript Object

var objectLiteral = {
    firstName: "Mario",
    isProgrammer: true,
}

// xml file --> Format to send data in/out --> Old format below; took too much coding and processing time
<obj> 
    <firstName>Mario</firstName>;
    <isProgrammer>true</isProgrammer>;
// </obj>

// JSON Format (also used in Python):
{
    // "firstName": "Mario",
    // "isProgrammer": true,
}

// to convert JS to JSON
JSON.stringify(objectLiteral)

// to see it:
var parsedObject = JSON.stringify(objectLiteral)
console.log(parsedObject)