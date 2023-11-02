//Function for showing the objects stored in cart
function loadProductsStoredInCart() {

    let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    let productCollection = JSON.parse(window.localStorage.getItem("product"));

    if (cartCollection != null) {
        let innerHTMLText = '';
        var cartTotal = 0;
        for (cartId in cartCollection) {
            var cartObj = cartCollection[cartId];
            let productId = parseInt(cartId);
            let quantity = parseInt(cartCollection[cartId]['quantity']);
            let productObj = productCollection[productId];
            // console.log(productInfo);
            cartTotal += parseFloat(quantity * parseFloat(productObj['price']));

            var productText = '<div id=' + productObj['id'] + '>'+
            '<table border="1"><tr>'+
            '<td rowspan="2"><a href="../views/product.html?id=' + productObj['id'] + '">'+
                '<img src="' + productObj['image'] + '"width="200" height="200"/></a></td>' +
            '<td><a href="../user_views/product.html?id=' + productObj['id'] + '"><b>' + productObj['title'] + '</b></a></td></tr>' +
            '<tr><td><b>Product Description:</b><br/>' + productObj['description'] + '</td></tr>' +
            '<tr><td> <b>Price :</b> $' + productObj['price'] + '</td>' +
            '<td> <b>Category :</b> ' + productObj['category'] + '</td></tr></table></div><br/>';
            innerHTMLText += productText;
        }

        document.getElementById('cart').innerHTML = innerHTMLText;
        document.getElementById('cart-total').innerHTML = `<b> Cart Total: </b> $` + parseFloat(cartTotal);

    } else {
        document.getElementById('cart').innerHTML = `<div> Cart is empty. </div></br>`;
    }
}
