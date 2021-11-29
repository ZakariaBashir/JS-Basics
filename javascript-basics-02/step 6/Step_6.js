var pictures = document.querySelectorAll("pic");
pictures.forEach((img,key)=>{
    pic.onmouseover = function(){pic.src = `images/image${key+1}_2.jpg`; };
    pic.onmouseout = function(){pic.src = `images/image${key+1}.jpg`;};
});