var name = document.querySelector("#name");
var surname = document.querySelector("#surname");
var city = document.querySelector("#city");
var button = document.querySelector("button");

button.addEventListener("click", reset)

function reset () {
    var answer = confirm("Do You Want To Reset!")

    if(answer === true){
        name.value = null;
        surname.value = null;
        city.value = null;
    }
};