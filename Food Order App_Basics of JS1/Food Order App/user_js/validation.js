//Function to validate email id
function validateEmail(){
    //Select the input element with id "email"
    var email = document.getElementById("email");
    //Code to perform validations on the email value entered by user
    if (email.value.indexOf("@") !== -1 && email.value.lastIndexOf(".") > email.value.indexOf("@")){
        //Check if the last "." symbol is not too close to the end of the email
        if (email.value.lastIndexOf(".") < email.value.length - 2) {
            document.getElementById("emailValidity").innerHTML = "Valid email address!";
            document.getElementById("emailValidity").style.color="green";
            email.className ="form-control valid";
        }
        else{
            document.getElementById("emailValidity").innerHTML = "Invalid email address!";
            document.getElementById("emailValidity").style.color="red";
            email.className ="form-control invalid";
        }
    }
    else{
            document.getElementById("emailValidity").innerHTML = "Invalid email address!";
            document.getElementById("emailValidity").style.color="red";
            email.className ="form-control invalid";
    }
}

//Function to validate username mentioned in task 1.i
function validateUserName(){
    //Select the input element with id "username"
    var username = document.getElementById("username");
    //Check if username provided is "great"

    //COMPLETE THE REST OF CODE FOR TASK 1.i
}

//Function to validate password mentioned in task 1.i
function validatePwd(){
    //Select the input element with id "pwd"
    var pwd = document.getElementById("pwd");
    //Select the input element with id "pwd-repeat"
    var repeatPwd = document.getElementById("pwd-repeat");
    //Code to perform validations on the password and repeat password values entered by user
    var pwdValidityPara = document.getElementById("pwdValidity");
    //Check if both the passwords provided are "learn"
    
    //COMPLETE THE REST OF CODE FOR TASK 1.i
}