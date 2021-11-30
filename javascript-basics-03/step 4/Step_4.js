let passwordInput = document.querySelector("#password");
var confirmationInput = document.querySelector("#confirmation");
var buton = document.querySelector("button");

buton.onclick = function() {
    if (password.value != confirmation.value) {
        passwordInput.style.border= "3px solid red";
        confirmationInput.style.border= "3px solid red";
    }
};