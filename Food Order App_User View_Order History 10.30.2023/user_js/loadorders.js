function loadOrderHistory(){
    let signedInUser=JSON.parse(window.sessionStorage.getItem("signedInUser"));
    if (signedInUser==null){
        window.location.href="signin.html";
    }
    else{

        orderTable=document.getElementById("orderstable");
        try{
            let orderCollection = JSON.parse(window.localStorage.getItem("order"));
        
        let filteredOrderCollection =Object.values(orderCollection).filter(orderObj=>orderObj.userId==signedInUser["id"]);
        
        if(filteredOrderCollection.length==0){
            document.getElementById("orderhistory").innerHTML="<h3>No orders placed</h3>";
            orderTable.innerHTML="";
        }
        else{
            Object.entries(filteredOrderCollection).forEach(orderObj =>{
                var tableRow = document.createElement("tr");
                orderTable.appendChild(tableRow);
                var orderValues = orderObj[1];
                var orderText='<td>'+orderValues["id"]+'</td>'+
                                    '<td>'+orderValues["orderDate"]+'</td>'+
                                    '<td>$'+orderValues["amount"]+'</td>'+
                                    '<td><button class="btn btn-primary" id="'+orderValues["id"]+
                                    '" onclick="viewOrderDetail('+orderValues["id"]+');">View Details</button>'
                
                tableRow.innerHTML=tableRow.innerHTML+orderText;
               });
            }
        }
    
        catch{
            document.getElementById("orderhistory").innerHTML="<h3>No orders placed</h3>";
            orderTable.innerHTML="";
        }
    }
}

function viewOrderDetail(orderNo){
    window.location.href="view_orderdetail.html?id="+orderNo;
}

function loadOrderDetail(){
    //Complete Task 1 here
    let orderNo = window.location.href.split("?")[1].split("=")[1]
    let orderValues = JSON.parse(window.localStorage.getItem("order"))[orderNo]
    let userColl = JSON.parse(window.localStorage.getItem("user"))
    let prodCollection = JSON.parse(window.localStorage.getItem("fooditem"))
    let restChosen = JSON.parse(window.localStorage.getItem("restaurant"))

    let orderTable = document.getElementById("orderdetailtable")

    let orderText = '<tr><td><b> Order No.: </b></td><td>' + orderValues["id"] +'</td></tr>' +
        '<tr><td><b> Order Date: </b></td><td>' + orderValues["orderDate"] +'</td></tr>' +
        '<tr><td><b> Customer Name: </b></td><td>' + userColl[orderValues["userId"]]["fullname"] +'</td></tr>' +
        '<tr><td><b> Shipping Address: </b></td><td>' + orderValues["shippaddr"] +'</td></tr>' +
        '<tr><td><b> Contact No.: </b></td><td>' + orderValues["contact"] +'</td></tr>' +
        '<tr><td><b> Ordered From: </b></td><td>' + restChosen[orderValues["id"]]["name"] +'</td></tr>' +
        '<tr><td><b> Items Ordered: </b></td></tr>' +
        '<tr><td><b> Item: </b></td><td><b> Price: </b></td><td><b> Qty: </b></td><td><b> Item Total: </b></td></tr>'
        // I do not know how to get the order items to display. Most of this was copied/pasted from the lab session.
        
        orderTable.innerHTML = orderTable.innerHTML + orderText
}