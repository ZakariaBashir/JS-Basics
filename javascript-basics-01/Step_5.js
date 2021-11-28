function multiplyby(){
    var num1= document.getElementById(`first_number`).value;
    var num2= document.getElementById(`second_number`).value;
    var result= num1 * num2;
    alert(`
    first_number:${num1}
    second_number:${num2}
    Multiplication result of both numbers is:${result}` );
}
