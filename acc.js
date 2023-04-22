// function recover_acc() {
     // document.getElementById("p_name").value = "hi";    
// }
document.getElementById("p_name").value = localStorage.getItem("acc_name1");
document.getElementById("p_name2").value = localStorage.getItem("acc_name2");
document.getElementById("p_email").value = localStorage.getItem("acc_email");
document.getElementById("p_phone").value = localStorage.getItem("acc_mob");
document.getElementById("p_address").value = localStorage.getItem("acc_address");

// localStorage.getItem("acc_name1")
// localStorage.getItem("acc_name2")
// localStorage.getItem("acc_email")
// localStorage.getItem("acc_mob")
// localStorage.getItem("acc_address")



function save_info() {
    acc_name = document.getElementById("p_name").value;
    acc_name2 = document.getElementById("p_name2").value;
    acc_email = document.getElementById("p_email").value;

    acc_mob = document.getElementById("p_phone").value

    acc_address = document.getElementById("p_address").value;

    console.log(acc_name+acc_name2+acc_email+acc_mob+acc_address);

    localStorage.setItem("acc_name1", acc_name)
    localStorage.setItem("acc_name2", acc_name2)
    localStorage.setItem("acc_email", acc_email)
    localStorage.setItem("acc_mob", acc_mob)
    localStorage.setItem("acc_address", acc_address)
    
    document.getElementById("save_info_btn").innerHTML = "<div class='spinner-border spinner-border-sm' role='status'><span class='sr-only'>Loading...</span></div>"
    for (let i = 1; i <= 5; i++) {
        setTimeout(() =>  window.location = "index.html", 3000);
    }
}