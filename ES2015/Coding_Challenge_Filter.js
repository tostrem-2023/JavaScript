var obj = [
    {name: "One", val: 55},
    {name: "Two", val: 48},
    {name: "Three", val: 2},
    {name: "Four", val: 105},
    {name: "Five", val: 65}
];

// forEach
obj.forEach(function(item){
    if (item.val % 2 === 0);
    {
        console.log("Object having even val: ", item);
    }
});


// Filter
var filteredObj = obj.filter(function(item) {
    return item.val > 50; 
});
console.log("Objects having val greater than 50 are: ", filteredObj);

// Map
var mappedObj = obj.map(function(item){
    item.val = item.val * item.val;
    return item;
});
console.log("Object with the square of their val: ", mappedObj);