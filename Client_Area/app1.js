var code = "staff_of_tbf";


function check(){
    if(document.getElementById("code_input").value === code){
        document.getElementById("h3_success").innerHTML = "The code is correct.<br>Access granted.";
        document.getElementById("h3_fail").innerHTML = ""
        window.location="https://the-big-fish-b3445-default-rtdb.firebaseio.com";
    }
    else{
        document.getElementById("h3_fail").innerHTML = "The code is incorrect.<br>Access denied."
    }
}