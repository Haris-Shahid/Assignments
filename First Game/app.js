function signUp() {
    var name = document.getElementById("usernamesignup").value ;
    var email = document.getElementById("emailsignup").value ;
    var password = document.getElementById("passwordsignup").value ;
    var confirmPaswaord = document.getElementById("passwordsignup_confirm").value ;
    var p = document.getElementById("error");
    var para = document.getElementById("mem") ;
    if(name == "" && email == "" && password == "" && confirmPaswaord == ""){
        p.innerHTML = "Please Fill This Form First " ;
    }
    else if(name == ""){
        p.innerHTML = "You Must Enter Your Name";
    }
    else if(email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Enter valid Email";
    }
    else if(password == ""){
        p.innerHTML = "You Must Enter Your Password";
    }
    else if(password.length < 8){
        p.innerHTML = "Your Password is too short";
    }
    else if(password != confirmPaswaord){
        p.innerHTML = "Your Password Doesn't Match" ;
    }
    else{
        p.innerHTML = "Registration Completed" ;
        para.innerHTML = "Now you are a Member :" ;
        localStorage.setItem('Email', JSON.stringify(email));
        localStorage.setItem('Password', JSON.stringify(password));        
    }
}
    
function logIn(){
    var userE= JSON.parse(localStorage.getItem('Email'));
    var userP= JSON.parse(localStorage.getItem('Password'));
    var emailUser = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var paragraph = document.getElementById("error1");
    var member = document.getElementById("member");
    var link = document.getElementById("link");
    if(emailUser == ""){
        paragraph.innerHTML = "Please Enter Your Email";
    }
    else if(emailUser.indexOf("@") == "-1" || emailUser.lastIndexOf(".com") == "-1"){
        paragraph.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        paragraph.innerHTML = "Please Enter Your Password";
    }
    else if(emailUser != userE || pass != userP){
        paragraph.innerHTML = "LOGIN FAILED! You Entered Wrong Details.";
        document.getElementById("username").value = "" ;
        document.getElementById("password").value = "" ;
    }
    else if(emailUser === userE && pass === userP){
       paragraph.innerHTML = "Login Successfully......!" ;
       member.innerHTML = "Click Start to Play the Game  :" ;
       link.innerHTML = "Start" ;
       link.setAttribute('href','game/index.html') ; 
    }
            
}
