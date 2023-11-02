// example of what server provides back - as a string:
const strProducts = `
[
    {
        "name": "Hammer",
        "description": "A claw hammer",
        "price": 12,
        "rating": {
            "min": 2,
            "max": 5
        }
    },
    {
        "name": "Xbox controller",
        "description": "A video game controller",
        "price": 60
    }
]`;

// convert to JS array
var products = JSON.parse(strProducts);
console.log(products);

var newProduct = {
    name: "Nolan",
    description: "A funny little boy",
    price: 1000000
};
products.push(newProduct);
console.log(products);

// transfer back to server using JSON string
var strProductsSendBack = JSON.stringify(products);
console.log(strProductsSendBack);