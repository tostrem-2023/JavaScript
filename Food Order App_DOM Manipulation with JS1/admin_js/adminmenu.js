var restaurantCollection = JSON.parse(window.localStorage.getItem("restaurant"));
var foodItemsCollection = JSON.parse(window.localStorage.getItem("fooditem"));
var menuCollection = JSON.parse(window.localStorage.getItem("menu"));
var menuId = 0;
for (var menu in menuCollection) {
    menuId++;
}


// Submission of Add Restaurant Page Form
function addMenu() {
    menuId += 1;
    var rno = document.getElementById("restaurant").value;
    var foodInMenu = {}
    var allprices = document.getElementsByClassName("foodprice");
    for (itemprice of allprices) {
        if (itemprice.disabled == false) {
            var foodId = parseInt(itemprice.id.split("price")[1]);
            foodInMenu[foodId] = itemprice.value;
            console.log(foodInMenu);
        }
    }
    saveMenu(menuId, rno, foodInMenu);
    alert("Menu added successfully!")
    gotoAdminPage();
}

//Save menu items data on add/edit
function saveMenu(menuId, rno, foodInMenu) {
    var menu, updatedMenuId, updatedMenu;
    //we set the updateMenu with the value of foodInMenu i.e., menu items which we want to add in the menu collection
    updatedMenu = foodInMenu;
    if (menuCollection == null) {
        //if menu collection does not exist in local storage
        //then we create empty menu initially and set the updatedMenuId to 1 as its the 1st menu getting saved.
        menu = {};
        updatedMenuId = 1;
    }
    else {
        //if menu collection exist in local storage 
        //then we take that whole menu collection in menu variable
        menu = menuCollection;
        //we set the updatedMenuId to the menuId variable value passed in the function
        updatedMenuId = menuId;
        //Now we iterate through each of the menus in the menu collection
        for (var menuNo in menuCollection) {
            //we check if any menu exist offered by the same restaurant for which we are trying to save the menu
            if (menuCollection[menuNo]["restaurantId"] === rno) {
                ///WRITE THE REMAINING CODE FROM HERE TO COMPLETE THE TASK No. 2
                //if menu already exist then we set the menuNo of that menu to updatedMenuId as we want to modify that menu
                menu[menuId] = {
                    "id" : menuId,
                    "restaurantId" : rno,
                    "foodInMenu" : foodInMenu,
                };
                //We also set the updatedMenu to the existing menuitems, i.e., value of the "menu" key
                updatedMenu = menuCollection;
                //We then iterate each of the menuitems of foodInMenu which we want to add in the existing menu
                

                //As we have got the menu offered by the restaurant so we break the loop
                
            }
        }
    }
    
    //Now we create a new menuitem record in the existing menu collection with key as updatedMenuId
    
    //We convert it into JSON String
    var menuData = JSON.stringify(menu);
    //We save it in local storage
    window.localStorage.setItem("menu", menuData);
    //We go back to admin dashboard page
        
}

//View All Menu Page
function listMenu() {
    var restaurantNo = document.getElementById("restaurant").value;
    var foodItemsTable = document.getElementById("fooditems");
    for (menuId in menuCollection) {
        var menuObj = menuCollection[menuId];
        foodItemsTable.innerHTML = '<p style="color:red;">No Menu Added</p>'
        if (menuObj["restaurantId"] === restaurantNo) {
            foodItemsTable.innerHTML = '<tr><th>Food Item Image</th><th>Food Item Name</th><th>Price</th></tr>';
            var foodmenu = menuObj["menu"];
            for (var fooditemId in foodmenu) {
                var foodItem = foodItemsCollection[fooditemId];
                var foodName = foodItem.title;
                var imgurl = foodItem.image;
                var cells = '<tr><td><img src=' + imgurl + ' width="50px" height="50px"></td><td>' + foodName + '</td><td>' + foodmenu[fooditemId] + '</td></tr>'
                foodItemsTable.innerHTML += cells;
            }
            break;
        }
    }
}
//Navigate to Admin Page
function gotoAdminPage() {
    window.location.href = "admin_page.html";
}