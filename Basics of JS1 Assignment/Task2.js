// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`). The types of triangles are equilateral, isosceles, and scalene.
var side1 = 5;
var side2 = 5;
var side3 = 8;
if (side1 === side2 && side2 === side3) {
  console.log("1: Equilateral");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("1: Isosceles");
} else {
  console.log("1: Scalene");
}



// 2. Write a JavaScript program that counts the number of occurrences of a specific element in an array using a for...of loop.
function countOccurrences(arr, target) {
  var count  = 0;
  for (var i=0; i<arr.length; i++){
      if (arr[i] == target)
          count++;
  };
  return count;
};

const numbers = [1, 2, 3, 2, 4, 2, 5];
console.log("2:", countOccurrences(numbers,2));



// 3. Write a function that takes an array of product prices and returns the total price. 
//You can assume that the array contains only numbers.
var productPrices = [10, 20, 30, 40];
function calculateTotalPrice(productPrices) {
  var sum = 0;
  for(var i=0; i<productPrices.length; i++) {
    sum += productPrices[i];
  }
  return sum;
}
console.log("3:", calculateTotalPrice(productPrices)); 



// 4. Write a function that takes an array of product prices and a discount percentage. 
//Apply the discount to each product price and return the updated prices as an array.
function applyDiscount(prices, discount) {
  var updatedPrices = [];
  for (let i=0; i<prices.length; i++) {
    var discountedPrice = prices[i] - (prices[i] * (discount/100));
    updatedPrices.push(discountedPrice);
  }
  return updatedPrices;
};

var originalPrices = [10, 20, 30, 40];
var discountPercentage = 20;

var result = applyDiscount(originalPrices, discountPercentage);
console.log("4:", result);



// 5. Write a function that takes an array of product quantities and 
//returns an array of indices for products that are out of stock (quantity is 0).
function getOutOfStockProducts(quantities) {
  var OutofStock = 0;
  let index = [], i = -1;
  while ((i=quantities.indexOf(OutofStock, i+1)) !== -1) {
      index.push(i);
  };
  return index;
  };

var productQuantities = [2, 0, 4, 0, 3];
console.log("5:", getOutOfStockProducts(productQuantities)); 
