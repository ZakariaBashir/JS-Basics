let showText = document.querySelector("#show");
let hideText = document.querySelector("#hide");
let text = document.querySelector("#texte");

function anahtarlama() {
    showText.onclick = function() {
        texte.style.display = "inline"
    };
    hideText.onclick = function() {
        text.style.display = "none"
    }
}; 
        anahtarlama() 