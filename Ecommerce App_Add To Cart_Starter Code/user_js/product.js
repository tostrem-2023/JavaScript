var productCollection = JSON.parse(window.localStorage.getItem("product"));

let cartObj = JSON.parse(window.localStorage.getItem("cart"));

//Function for loading Product Information on product.html page
(function loadProductInformation() {
    var queryString = window.location.href;
    //Explain this step in detail
    var productId = queryString.split("?")[1].split("=")[1];
    var productObj = productCollection[productId];

    let productText = generateProductText(productObj);

    let isProductInCart = checkProductInCart(productId);

    let productInCartQuantity = fetchProductQuantity(productId);
    let addToCartQuantityButton = ''

    if (isProductInCart) {
        // show the # of quantity added to cart
        productText += `<p style="background-color: #bbf2c9"> ${productInCartQuantity} units of product added in cart. <p/>`;
    } else {
        productText += `<br/>`;
        addToCartQuantityButton += '<label for="quantity">Quantity:</label>' +
        '<input type="number" id="quantity" class="quantity" min="1" max="100" value="' + 1 + '">' +
        '<button style="margin-right:16px" onclick="addProductToCart()">Add to Cart</button>';
        
    }

    productText += `${addToCartQuantityButton} <a href="../user_views/cart.html"><button>Go to Cart</button></a>
    </div></div>`;
    document.getElementById("product-data").innerHTML = productText;
})();

// function to get the quantity if the product is in the cart
function fetchProductQuantity (productId = 0) {
    if (checkProductInCart (productId)) {
        return cartObj[productId]['quantity'];
    } else {
        return 1;
    }
}

function generateProductText(productObj) {  // replacing productText (row 19), which we then deleted and copied into row 35
    const {image, title, description, price, ...otherProductDetails} = {...productObj};

    let productText = '<img src="' + productObj["image"] + '" alt="Product">' +
        '<div class="info">' +
        '<div class="title"><b>Product Title : ' + productObj["title"] + '</b></div><br/>' +
        '<div class="description"><b>Product Description: </b><br/>' + productObj["description"] + '</div>' +
        '<div class="price"><br/>Price : $' + productObj["price"] + '</div>' +
        '<div>';
    return productText;
}

// function to check if product is already in the cart
function checkProductInCart(productId = 0) {
    cartObj !== null && productId in cartObj;
}

// Function  to add Product with the respective quantity
function addProductToCart() {
    // http://127.0.0.1:5500/Ecommerce%20App_Add%20To%20Cart_Starter%20Code/user_views/product.html
    let productId = window.location.href.split("?")[1].split("=")[1];
    let quantity = parseInt(document.getElementById("quantity").value);
    let cartCollection = window.localStorage.getItem("cart");

    if (cartCollection) {
        cart = JSON.parse(cartCollection);
    } else {
        cart = {};
    };
    cart [productId] = {
        "productId" : productId,
        "quantity" : quantity
    }
    window.localStorage.setItem("cart", JSON.stringify(cart));
    location.reload()
}