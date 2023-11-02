function loadProductContent(){
    loadCuisines();
    loadCategories();
    loadRestaurants();
    
}
let styleText="",hrefText="";

let cuisineType = JSON.parse(window.localStorage.getItem("cuisine"));
let categoryType = JSON.parse(window.localStorage.getItem("category"));  
let restaurantType = JSON.parse(window.localStorage.getItem("restaurant")); 

function loadCuisines(cuisineObj){
    var innerHTMLText = "";
    for (cuisineId in cuisineType) {
        var cuisineObj = cuisineType[cuisineId];

        var cuisineText = '<div id=' + cuisineObj['id'] + '>' + 
        '<table border="1">'+
        '<tr><td><img src="' + cuisineObj['image'] + '"width="200" height="150"/>' + '</br>' + '</td></tr>' +
        '<tr><td>' +  cuisineObj['name'] + '</td></tr>';

        innerHTMLText += cuisineText;
    }
    document.getElementById('cuisine').innerHTML = innerHTMLText;
};
    
    

function loadCategories(categoryId){
    var innerHTMLText = "";
    for (categoryId in categoryType) {
        var categoryObj = categoryType[categoryId];

        var categoryText = '<div id=' + categoryObj['id'] + '>' +
        '<table border="1">'+
        '<td><img src="' + categoryObj['image'] + '"width="200" height="150"/>' + '</br>' + '</td></tr>' + 
        '<tr><td>' + categoryObj['name'] + '</td></tr>' ;

        innerHTMLText += categoryText;
    }
    document.getElementById('category').innerHTML = innerHTMLText;
};


function loadRestaurants(restaurantId){
    var innerHTMLText = "";
    for (restaurantId in restaurantType) {
        var restaurantObj = restaurantType[restaurantId];

        var restaurantText = '<div id=' + restaurantObj['id'] + '>' +
        '<table border="1">'+
        '<tr><td><img src="' + restaurantObj['image'] + '"width="200" height="150"/>' + '</br' + '</td></tr>'+
        '<tr><td>' + restaurantObj['name'] + '</td></tr>';

        innerHTMLText += restaurantText;
    }
    document.getElementById('restaurant').innerHTML = innerHTMLText;
}
