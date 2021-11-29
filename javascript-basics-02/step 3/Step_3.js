var div = document.querySelector("div#div");
var input = document.querySelector("input#name");

input.addEventListener("change",()=>{
    console.log(input.value);
    div.innerHTML = "I'm " + input.value;
});