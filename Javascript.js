window.onload = function() {

    //Ejercicio avanzado 1
    if(multipleOfThree(4251)){
        console.log("Es multiplo de 3");
    } else{
        console.log("No es multiplo de 3");
    }

    //Ejercicio avanzado 2
    timeFromTheThird();
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

function timeFromTheThird() {
    // let fechaVictoria = new Date('2022-12-18');
    let fechaVictoria = new Date('2022-12-18T15:00:00');
    // let fechaVictoria = new Date(2022, 11, 18, 15, 00);

    let fechaActual = new Date();

    let diferencia = fechaActual.getTime() - fechaVictoria.getTime();
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    let minutos = fechaActual.getMinutes()

    let diferencia_horas = fechaActual.getHours() - fechaVictoria.getHours();

    if(diferencia_horas<0){
        //Si la diferencia es negativa, la hora actual es mejor a la de la victoria, la cual se tiene que ajustar
        diferencia_horas = 24+diferencia_horas;
    }
    console.log(`Pasaron ${dias} días, ${diferencia_horas} horas y ${minutos} minutos desde el Domingo, 18 de diciembre de 2022.`);

}