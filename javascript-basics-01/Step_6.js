function calculate(){
    var num1= document.getElementById(`first_number`).value;
    var num2= document.getElementById(`second_number`).value;
    var remainder= num1 % num2;
    alert(`
    first_number:${num1}
    second_number:${num2}
    the remainder of the division is:${remainder}` );
}