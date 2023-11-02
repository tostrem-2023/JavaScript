function loadFoodItemsInCart(){
    let queryString = window.location.href;
    let queryArray = queryString.split("?")[1].split("=");
    let restaurantId, filterName, filterValue, filteredFoodItems;
    let filteredFoodItemIds =[];
    //If the page is navigated from click event on cuisine names or category names on index page
    if (queryArray.length==3){
        restaurantId = queryArray[1].split("&")[0];
        filterName = queryArray[1].split("&")[1];
        filterValue = queryArray[2];
        filteredFoodItems = Object.values(JSON.parse(window.localStorage.getItem("fooditem"))).filter(fooditem=>fooditem[filterName]==filterValue);
        filteredFoodItems.forEach(filteredFoodItem=>{
            filteredFoodItemIds.push(filteredFoodItem["id"]);
        })
        
    }
    //Else page is navigated from click event on restaurant names on index page
    else{
        restaurantId = queryArray[1];
    }

    var menuData, filteredMenuByRestaurant;
    let foodItemsTable=document.getElementById("fooditems");
    let restaurantValues=Object.values(JSON.parse(window.localStorage.getItem("restaurant")));
    try{
        queryName=restaurantValues.filter(restaurantObj=>restaurantObj.id==restaurantId)[0].name;
            
        menuData = Object.values(JSON.parse(window.localStorage.getItem("menu")));
        try{
            
            filteredMenuByRestaurant=menuData.filter(menu=>menu.restaurantId==restaurantId)[0]["menu"];
            
            if(filteredMenuByRestaurant!=null){
                if(filteredFoodItemIds.length!=0){
                    filteredMenuIds = reorderMenu(filteredMenuByRestaurant, filteredFoodItemIds);
                    
                    let filteredMenuByRestaurantCp = Object.values(JSON.parse(window.localStorage.getItem("menu"))).filter(menu=>menu.restaurantId==restaurantId)[0]["menu"];
                    foodItemsTable.innerHTML='<tr><th>Food Item Image</th><th>Food Item Name</th><th>Rate</th><th>Quantity</th><th>Price</th></tr>';
                    for(let cnt =0; cnt<filteredMenuIds.length; cnt++) {
                        foodNo = filteredMenuIds[cnt];
                        var foodItem=Object.values(JSON.parse(window.localStorage.getItem("fooditem"))).filter(fooditemobj=>fooditemobj.id==foodNo);
                        var foodName = foodItem[0].title;
                        var imgurl= foodItem[0].image;
                        var price = filteredMenuByRestaurantCp[foodNo];
                        var cells = '<tr><td><img src='+imgurl+' width="50px" height="50px"></td><td class="fooditems" id='+foodNo+'>'
                            +foodName+'</td>'+
                            '<td><input type="number" id="rate'+foodNo+'" class="foodrate" value='+price+' disabled></td>'+
                            '<td><input type="number" id="qty'+foodNo+'" class="foodqty" min=0 max=10 step=1 value=0 onclick="changePrice('+foodNo+')"></td>'+
                            '<td><input type="number" id="price'+foodNo+'" class="foodprice" value=0 disabled></td></tr>'
                        foodItemsTable.innerHTML= foodItemsTable.innerHTML+cells;
    
                    }; 
                }
                else{
                    foodItemsTable.innerHTML='<tr><th>Food Item Image</th><th>Food Item Name</th><th>Rate</th><th>Quantity</th><th>Price</th></tr>';
                    Object.entries(filteredMenuByRestaurant).forEach(element => {
                        var foodItem=JSON.parse(window.localStorage.getItem("fooditem"))[element[0]]
                        var foodName = foodItem.title;
                        var imgurl= foodItem.image;
                        var cells = '<tr><td><img src='+imgurl+' width="50px" height="50px"></td><td class="fooditems" id='+foodItem.id+'>'
                            +foodName+'</td>'+
                            '<td><input type="number" id="rate'+foodItem.id+'" class="foodrate" value='+element[1]+' disabled></td>'+
                            '<td><input type="number" id="qty'+foodItem.id+'" class="foodqty" min=0 max=10 step=1 value=0 onclick="changePrice('+foodItem.id+')"></td>'+
                            '<td><input type="number" id="price'+foodItem.id+'" class="foodprice" value=0 disabled></td></tr>'
                        foodItemsTable.innerHTML= foodItemsTable.innerHTML+cells;
                    });
                }                               
                }
            }
            catch{
                document.getElementById("ordercontainer").innerHTML='<h4>No Menu Added</h4>';
            }}
            catch{
                document.getElementById("ordercontainer").innerHTML='<h4>No Menu Added</h4>';
            }
}
function reorderMenu(filteredMenuByRestaurant, filteredFoodItemIds){
    let reorderedMenuIds = [], reorderedMenuPrices = []
    
    filteredFoodItemIds.forEach(id =>{
        if (filteredMenuByRestaurant[id]!=undefined){
            reorderedMenuIds.push(id);
            reorderedMenuPrices.push(filteredMenuByRestaurant[id]);
            
            delete filteredMenuByRestaurant[id];
        }
    })   
    
    Object.entries(filteredMenuByRestaurant).forEach(menu =>{
        reorderedMenuIds.push(menu[0]);
        reorderedMenuPrices.push(menu[1]);
    })
    return reorderedMenuIds;
}


//This function should change the price as per the quantity selected for a particular food item 
//and it should also call the displayTotal() function
function changePrice(foodNo){
    //Complete Task 1
    // I don't know how to do this, and don't even know where to start.
    }

//This function should compute the total value based on all the prices 
//and should also enable/disable the input elements for shipping address and contact number based on the total amount value.
function displayTotal(){
    //Complete Task 2
    // I don't know how to do this, and again, I don't even know where to start. I don't believe either Task 1 or 2 were covered in the lab session either.
}
//Function to place an order
//Should check if the amount is greater than 0, shipping address and contact details are provided 
//And then only should place an order by displaying successful message and navigating back to index page
//Otherwise should display appropriate alert message
function placeOrder(){
    //Complete Task 3 
    // The below is copied from the lab session, but because I cannot complete Task 1 or 2, I suspect this isn't correct either.
    let address = document.getElementById("shipaddr").value
    let phoneNum = document.getElementById("contact").value

    if (Object.keys(cartObject).length == 0){
        alert("Cart is empty.")
    } else if (address =="") {
        alert("Address cannot be left empty.")
    } else if (phoneNum =="") {
        alert("Phone Number cannot be left empty.")
    } else {
        orderId += 1
        let orderObj = {
            "shipaddr": address,
            "contact": phoneNum,
            "orderDate": new Date (),
            "amount": cartTotal,
            "orderId": orderId,
            "productsOrdered": cartObject
        }
        saveOrder(orderId, orderObj);
        window.localStorage.removeItem("cart");
        alert("Order was placed successfully.")
        window.location.href = "products.html"
    }
};