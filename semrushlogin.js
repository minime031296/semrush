var form = document.querySelector(".login");
let email = document.getElementById("username");
let password = document.getElementById("password");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let userDetails = {
        email: email.value,
        password: password.value
    };
    //console.log(userDetails)

   


    let savedDetails = JSON.parse(localStorage.getItem("userDetails"));
    

    console.log(savedDetails)
    if (userDetails.email === savedDetails.email && userDetails.password === savedDetails.password) {
       
        window.location.replace("./enterpage.html");
        
    } else {
        alert("Wrong login or password.");
    }
});













