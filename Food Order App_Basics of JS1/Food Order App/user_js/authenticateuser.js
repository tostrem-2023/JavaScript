//Function to perform task mentioned in 1.iii
//Either navigate to index.html on successful registration 
//Or display an appropriate message on invalid input values.
function register(){
    //Select the input element with id "username"
    var username = document.getElementById("username");
    //Select the input element with id "email"
    var email = document.getElementById("email");
    //Select the input element with id "pwd-repeat"
    var repeatPwd = document.getElementById("pwd-repeat");
    //Perform check if either username or email id or password fields has "form-control invalid" classname and accordingly take action
    
    //COMPLETE THE REST OF CODE FOR TASK 1.iii
}

//Function to perfom task mentioned in 2.i and 2.ii
function signin(){
    //Select the value of input element with id "username"
    var username = document.getElementById("username").value;
    //Select the value of input element with id "pwd"
    var pwd = document.getElementById("pwd").value;
    console.log(username, pwd)
    //Code to authenticate username and password
    
    //COMPLETE THE REST OF CODE FOR TASK 2.i and 2.ii
}
