// Get data from local storage
var productCollection = JSON.parse(window.localStorage.getItem("product"));
console.log(productCollection);

// Anonymous function for loading products data in the HTML page
(function (){
    var innerHTMLElement = "";

    for(productId in productCollection) {
        var productObj = productCollection[productId];
        console.log(productObj);

        // Now we can create the DOM and inject it to the HTML

        var productText = '<div id=' + productObj['id'] + '>' + 
        '<table border="1"><tr>' + 
        '<td rowspan="2"><a href="../user_views/products.html?=id=' + productObj['id'] + '">' + 
        '<img src="'+ productObj['image'] + '"width="200" height="200""/></a></td></tr>' + 
        '<tr> <td><b> Product Description: </b><br/>' + productObj ['description'] + '</td>,</tr>' + 
        '<tr> <td><b> Price: </b><br/>' + productObj ['price'] + '</td>,</tr>' + 
        '<tr> <td><b> Category: </b><br/>' + productObj ['category'] + '</td>,</tr>' + 
        '</table></div></br>'
        innerHTMLElement += productText;
    };
    document.getElementById("product-list").innerHTML = innerHTMLElement;
})();