const GreenRenk = document.querySelector(".green");
const RedRenk = document.querySelector(".red");
const BlueRenk = document.querySelector(".blue");
const text = document.querySelector("#text");

function anahtarlama() {
    GreenRenk.onclick = function() {
        text.style.color = "green"
    };
    RedRenk.onclick = function() {
        text.style.color = "red"
    };
    BlueRenk.onclick = function() {
        text.style.color = "blue"
    };
};
anahtarlama() 