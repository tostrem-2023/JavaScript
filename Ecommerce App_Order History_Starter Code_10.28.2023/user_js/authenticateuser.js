let userCollection = JSON.parse(window.localStorage.getItem("user"));
let userId = (userCollection == null) ? 0 : Object.entries(userCollection).length;

let userCredentialCollection = JSON.parse(window.localStorage.getItem("usercredential"));


function register(){
    // Added during lab session
    let email = document.getElementById("email");
    let repeatPwd = document.getElementById("pwd-repeat");
    if (email.className == "form-control invalid" || repeatPwd.className == "form-control invalid") {
        window.history.back();
        document.getElementById("formMsg").innerHTML = "<b> Please fill all values correctly. </b>"
        document.getElementById("formMsg").style.color = "red"
        email.className == "form-control invalid" ? email.focus() : pwd.focus ();
        return false;
    } else {
        userId = userId + 1;
        let userName = document.getElementById("username").value
        let fullName = document.getElementById("name").value
        let emailValue = email.value  // already accessed email above - row 9
        let address = document.getElementById("addr").value
        let contactNumber = document.getElementById("contact").value
        let pwdValue = repeatPwd.value  // already accessed email above - row 10
        saveUser(userId, userName, fullName, emailValue, address, contactNumber, pwdValue)
        alert ("Thank you for registering.")
        let signedInUser = new Map();
        signedInUser.set("id", userId);
        let userData = JSON.stringify(Object.fromEntries(signedInUser))
        window.sessionStorage.setItem("signedInUser", userData)
        window.location.href = "../user_views/products.html"
        return true;
    }
}

function signin(){
    // Added during lab session
    let userName = document.forms["SignInForm"].username.value;
    let pwd = document.forms["SignInForm"].pwd.value;
    let userInfo = searchUser(userName);
    console.log(userInfo);
    if(userInfo.length != 0) {
        let userId = userInfo[0][0];
        if(pwd == userInfo[0][1].pwd) {
            let signedInUser = new Map();
            signedInUser.set("id", userId);
            let userData = JSON.stringify(Object.fromEntries(signedInUser))
            window.sessionStorage.setItem("signedInUser", userData)
            window.location.href = "../user_views/products.html"
        } else {
            document.getElementById("signinValidity").innerHTML = "<b> Invalid password. </b>"
            document.getElementById("signinValidity").style.color = "red"
            document.getElementById("pwd").focus()
        } } else {
            document.getElementById("signinValidity").innerHTML = "<b> Invalid username. </b>"
            document.getElementById("signinValidity").style.color = "red"
            document.getElementById("username").focus()
        }};

//Save user data on add/edit
function saveUser(userNo, uname, fullname, emaild, addr, contact, pwd){
    let user, userCredential;
    if(userCollection==null){
        user = new Map();
        userCredential = new Map();
    }
    else{
        user = new Map(Object.entries(userCollection));
        userCredential = new Map(Object.entries(userCredentialCollection));
    }
    user.set(""+userNo, {
        "id" : userNo,
        "fullname" : fullname,
        "email" : emaild,
        "address" : addr,
        "contact" : contact  
    });
    userCredential.set(""+userNo,{
        "username" : uname,
        "pwd" : pwd,
    });
    
    let userData = JSON.stringify(Object.fromEntries(user));
    window.localStorage.setItem("user", userData);
    let userCredentialData = JSON.stringify(Object.fromEntries(userCredential));
    window.localStorage.setItem("usercredential", userCredentialData);
}

//Find users details by username
function searchUser(username){
    let userCredentialData = JSON.parse(window.localStorage.getItem("usercredential"));
    let userCredentialValues = Object.entries(userCredentialData);
    return userCredentialValues.filter(userCredentialValue => userCredentialValue[1].username == username);
}

function signout(){
    
    window.sessionStorage.removeItem("signedInUser");
    window.location.href="../user_views/signin.html";
}