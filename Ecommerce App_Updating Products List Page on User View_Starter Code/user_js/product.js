// Get data from local storage
var productCollection = JSON.parse(window.localStorage.getItem("product"));

(function(){
    var queryString = window.location.href;
    console.log(queryString);
    var productId = queryString.split("?")[1].split("=")[1];
    // console.log(productId);

    var productObj = productCollection[productId];

    let productText = '<img src="' + productObj['image'] + '"alt="product">' + 
    '<div class="info">' +
    '<div class="title"><b>Product Title</b>:' + productObj["title"] + '</b></div><br/>' +
    '<div class="description"><b> Product Description: </b><br/>' + productObj['description'] + '<div/>' +
    '<div class="price"><b> Price: </b> $' + productObj['price'] + '<div/>' +
    '</div';

    productText += '<label for="quantity">Quantity: </label>'+
    '<input type="number" id="quantity" class="quantity" min="1" max="100" value=" '+ 1 + '" >' +
    '<button style="margin-right:16px"> Add to cart </button>' +
    '<a href="#"><button> Go to cart </button></a>' +
    '</div>' +
    '</div>';

    document.getElementById("product-data").innerHTML = productText;

})();