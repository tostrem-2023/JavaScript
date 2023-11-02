function loadRestaurantNames() {
    // filterOption will be either "cuisine" or "category"
    let filterOption = window.location.href.split("?")[1].split("=")[0];
    // filterValue will be the selected cuisine/category on the index.html page
    // For eg, "Italian" or "Pizza" or "Soup" etc
    let filterValue = window.location.href.split("?")[1].split("=")[1];

    headingText = (filterOption == "cuisine") ? filterValue + " food" : filterValue;
    // Function call to filter out the following - 
    // 1.food items belonging to specific category/cuisine
    // 2.restaurants offering those particular food items
    // So the return value of these function should be an array with 2 subarrays as follows-
    // The 1st subarray should have ids of all fooditems belonging to the selected cuisine/category
    // The 2nd subarray should have ids of all restaurants offering the food items having ids as mentioned in 1st subarray
    foodArr = loadByFilter(filterOption, filterValue);

    if (foodArr) {
        console.log(foodArr[0]);
        console.log(foodArr[1]);
        if (foodArr[1].length > 0) {
            document.getElementById("restaurantheading").innerHTML = "Restaurants delivering " + headingText;
            //Function to display name and image of all the filtered restaurants
            loadFilteredRestaurants(foodArr[1]);
        }
        else {
            document.getElementById("restaurantheading").innerHTML = "No Restaurants delivering " + headingText;
        }
    }
    else {
        document.getElementById("restaurantheading").innerHTML = "No Restaurants delivering " + headingText;
    }
}
//COMPLETE THE CODE FOR TASK 1
//Function to return an array of ids of filtered fooditems and ids of filtered restaurants
function loadByFilter(filterOption, filterValue) {
    //Extract an object containing details of all fooditems from local storage
    let Collection = JSON.parse(window.localStorage.getItem("fooditem"));
    //Check if its not null
    if (Collection != null) {
        //Read the values of the object containing all food items details
        CollectionObjects = Object.values(Collection);
        //Filter out the ids of the food items based on the filterValue in an array
        let foodIds = CollectionObjects.filter(fooditem => fooditem[filterOption] == filterValue).map(fooditem => fooditem.id);
        try {
            //Extract an object containing details of all menus from local storage
            let MenuCollection = Object.values(JSON.parse(window.localStorage.getItem("menu")));
            //Create an empty array to store filtered restauarant ids
            let restaurantIds = []
            //Filter out  the ids of the restaurants(in the restaurantIds array) from the menu object which are offering the filtered food items
            MenuCollection.forEach(MenuItem => {

                /*COMPLETE TASK 1 HERE */
                //Get the keys of MenuItem["menu"] and filter the keys (in an array named filteredMenu) which are present in the foodIds array
                filteredMenu = Object.keys(MenuItem["menu"]).filter(foodid =>{
                    if (foodIds.filter(id => id==foodid).length>0) {
                        return foodid;
                    }
                });
                //If the filteredMenu array length is more than 0 that means that menu offers any of the filtered food item, so extract the Menuitem["restaurantId"] and push it in the restaurantIds array.
                if (filteredMenu.length>0) {
                    restaurantIds.push(MenuItem["restaurantId"]);
                }
            });
            //create an array having 2 subarrays - filtered fooditem ids and filtered restaurant ids and return the array
            return [foodIds, restaurantIds];
        }
        catch (Error) {
            return;
        }
    }
}

//COMPLETE THE CODE FOR TASK 2
//Function to display name and image of the filtered restaurants
function loadFilteredRestaurants(restaurantIds) {
    //Make a style text which can be used while displaying the images of the restaurants
    let styleText = "width:200px;height:200px;border-radius:5px 25px";
    //Extract the id of the HTML element where the restaurant info is to be rendered on the web page.
    let restaurantTable = document.getElementById("restaurant");
    //Extract an object containing details of all restaurants from local storage
    let restaurantCollection = Object.values(JSON.parse(window.localStorage.getItem("restaurant")));
 
    /*COMPLETE TASK 2 HERE */
    //Check if its not null
    if (restaurantCollection !== null) {
    //Filter out the restaurants based on restaurantIds
        filterData = restaurantCollection.filter(filteredItem=> {
            if (restaurantIds.filter(id => id == filteredItem["id"]).length > 0) {
                return filteredItem;
            }
        });
        
        
    //Form an HTML text to display name and image of each of the filtered restaurant, use styleText variable value for image styles
    if (filterData != null) {
        filterData.forEach (filterObj => {
            var filterValue = filterObj;
            var filterText = `<div class = "col" id = "cat" >` +
            `<a class = "restaurant">` +
            `<img src ="${filterValue["image"]} class = "mx-auto d-block" style = ${styleText}>` +
            `<p style = "text-align:center"> ${filterValue["name"]} </p></a></div>`

            restaurantTable.innerHTML += filterText;
        });
    };
    //Render the HTML text in the HTML element
    function displayItems(restaurantCollection) {
        return restaurantCollection;
    }}};