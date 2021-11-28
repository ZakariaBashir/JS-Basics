function calculate(){
    var shoe_size= document.getElementById(`shoe_size`).value;
    var year= document.getElementById(`year`).value;
    var result= ((((shoe_size*2)+5)*50)-year)+1766;
    alert(`
    shoe_size: ${shoe_size}
    year: ${year}
    the result is: ${result}` );
}
