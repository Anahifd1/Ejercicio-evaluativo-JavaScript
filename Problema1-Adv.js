window.onload = function() {
 
    //Ejercicio avanzado 1
    if(multipleOfThree(4251)){
        console.log("Es múltiplo de 3");
    } else{
        console.log("No es múltiplo de 3");
    }

};

function multipleOfThree(num) {
    if (num == 0) {
        return true;
    } else if (num < 0) {
        return false;
    } else {
        return multipleOfThree(num - 3);
    }
}
