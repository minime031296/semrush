// This is the first form's event listener
let formSignup = document.getElementById("form");
let emailSignup = document.getElementById("username");
let passwordSignup = document.getElementById("password");

formSignup.addEventListener("submit", function (event) {
    event.preventDefault();

    let userDetails = {
        email: emailSignup.value,
        password: passwordSignup.value
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
});
