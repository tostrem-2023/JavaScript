//Function for showing the objects stored in cart
function loadProductsStoredInCart() {
    let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    var productCollection = JSON.parse(window.localStorage.getItem("product"));

    if (cartCollection != null) {
        let innerHTMLText = "";
        var cartTotal = 0;
        for (cartId in cartCollection) {
            var cartObj = cartCollection[cartId];

            let productId = parseInt(cartId);
            let quantity = parseInt(cartCollection[cartId]['quantity']);
            let productInfo = productCollection[productId];

            cartTotal += parseFloat(quantity * parseFloat(productInfo['price']));

            let productText = '<div id=' + productInfo['id'] + '><table border="1"><tr><td rowspan="2"><a href="../user_views/product.html?id=' + productInfo['id'] + '"><img src="' + productInfo['image'] + '"width="200" height="200"/></a>' +
                '<td colspan="2"><a href="../user_views/product.html?id=' + productInfo['id'] + '"><b>' + productInfo['title'] + '</b></a></td></tr>' +
                '<tr><td colspan="2"><b>Product Description:</b><br/>' + productInfo['description'] + '</td></tr>' +
                '<tr><td> <b>Price :</b> $' + productInfo['price'] + '</td>' +
                '<td> <b>Quantity in Cart : </b>' + quantity + '</td>' +
                '<td> <b>Category :</b> ' + productInfo['category'] + '</td></tr></table></div><br/>'+
                'tr><td colspan="3"><button onclick="removeItemFromCart(+cartId)">Remove from cart</button></td></tr>'

            innerHTMLText += productText;
        }

        document.getElementById('cart').innerHTML = '<div class="search-box"'
        document.getElementById('cart-total').innerHTML = '<b>Cart Total :</b> $' + parseFloat(cartTotal);
        // Added during class
        '</br><button onclick="emptyCard()">Empty Cart</button>';
    }
    else {
        document.getElementById('cart').innerHTML = '<div> Cart is empty :(</div><br/>';
    }

};

// Added during class

function displayItems(cartCollection) {

}


function emptyCart() {
    window.localStorage.removeItem("cart");
    window.location.reload();
}

function removeItemFromCart(id){
    let cartCollection = JSON.parse(window.localStorage.getItem("cart"))
    console.log(cartCollection)
    delete cartCollection[id];
    window.localStorage.setItem("cart", JSON.stringify(cartCollection))
    if(Object.keys(cartCollection).length == 0) {
        window.localStorage.removeItem("cart")
    }
    window.location.reload();
}

function searchInCart () {
    let searchValue = document.getElementById("searchbox").value 
    if(searchValue.length == 0) {
        alert("kindly enter something to search in cart")
    } else {
        let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
        var productCollection = JSON.parse(window.localStorage.getItem("product"));

        console.log(cartCollection);
        // let arr = []
        // for (let eachKey in cartCollection) {
        //     console.log(eachKey)
        //     if(productCollection[eachKey].title.toLowerCase().includes(searchValue.toLowerCase()))
        //         arr.push(productCollection[eachKey].title)
        // }
        let filteredIds = Object.keys(cartCollection).filter(eachKey => {
            let productTitle = productCollection[eachKey].title
            return productTitle.toLowerCase().includes(searchValue.toLowerCase())
        })
        let filteredCartItems = filteredIds.map(each => cartCollection[each])
        let filteredCartCollection = {}
        filteredCartCollection.forEach(each => filteredCartCollection[each.productId] = each)
        displayItems
    }
}