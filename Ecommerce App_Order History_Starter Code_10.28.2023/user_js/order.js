// Added all code during lab session
let signedInUser = JSON.parse(window.sessionStorage.getItem("signedInUser"))

function loadOrderHistory() {
    if (signedInUser == null) {
        window.location.href = "signin.html"
    } else {
        let orderstable = document.getElementById("orderstable")
        let orderCollection = JSON.parse(window.localStorage.getItem("order"))
        let userOrders = Object.values(orderCollection).filter(orderObj => orderObj.userId = signedInUser["id"])
        if(userOrders.length == 0) {
            document.getElementById("orderhistory").innerHTML = "<h3> No order history. </h3>"
            orderstable.innerHTML = ""
        } else {
            Object.entries(userOrders).forEach(eachEntry => {
                let tableRow = document.createElement("tr")
                orderstable.appendChild(tableRow)
                let orderData = eachEntry[1];
                let orderText = '<td>'+orderData["id"] +'</td>' +
                    '<td>' +orderData["orderDate"] +'</td>' +
                    '<td>' +orderData["amount"] +'</td>' +
                    '<td><button class = "btn btn-primary" id="'+ orderData["id"] +'" onclick="viewOrderDetails('+orderData["id"]+');">View Details</button></td>'
                tableRow.innerHTML = tableRow.innerHTML + orderText
            })
        }
    }
};

function viewOrderDetails(orderNo){
    console.log("hi")
    window.location.href = "../user_views/view_orderdetail.html?id=" + orderNo
}

function loadOrderDetail() {
    let orderNo = window.location.href.split("?")[1].split("=")[1]
    let orderValues = JSON.parse(window.localStorage.getItem("order"))[orderNo]
    let userColl = JSON.parse(window.localStorage.getItem("user"))
    let prodCollection = JSON.parse(window.localStorage.getItem("product"))
    console.log(orderValues)
    let orderTable = document.getElementById("orderdetailtable")
    console.log(orderValues["productsOrdered"])
    let orderText = '<tr><td><b> Order No.: </b></td><td>' + orderValues["id"] +'</td></tr>' +
        '<tr><td><b> Order Date: </b></td><td>' + orderValues["orderDate"] +'</td></tr>' +
        '<tr><td><b> Order Contact No.: </b></td><td>' + orderValues["contact"] +'</td></tr>' +
        '<tr><td><b> Order Address: </b></td><td>' + orderValues["shippaddr"] +'</td></tr>' +
        '<tr><td><b> Customer Order Id: </b></td><td>' + userColl[orderValues["userId"]]["fullname"] +'</td></tr>' +
        '<tr><td><b> Customer Email: </b></td><td>' + userColl[orderValues["userId"]]["email"] +'</td></tr>'
        
        for(let eachOrder in orderValues["productsOrdered"]) {
            let prodRate = prodCollection[eachOrder[0]]["price"]
            console.log(prodRate)
            console.log(prodCollection[eachOrder[0]]["title"])
        }
        
        orderTable.innerHTML = orderTable.innerHTML + orderText
}