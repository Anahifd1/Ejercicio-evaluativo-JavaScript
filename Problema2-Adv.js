window.onload = function() {

    //Ejercicio avanzado 2
    timeFromTheThird();
};

function timeFromTheThird() {
    // let fechaFinal = new Date('2022-12-18');
    let fechaFinal = new Date('2022-12-18T15:00:00');
    // let fechaFinal = new Date(2022, 11, 18, 15, 00);

    let fechaActual = new Date();

    let diferencia = fechaActual.getTime() - fechaFinal.getTime();
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    let minutos = fechaActual.getMinutes()

    let diferencia_horas = fechaActual.getHours() - fechaFinal.getHours();

    if(diferencia_horas<0){
        //Si la diferencia es negativa, la hora actual es mejor a la de la victoria, la cual se tiene que ajustar
        diferencia_horas = 24+diferencia_horas;
    }
    console.log(`Pasaron ${dias} días, ${diferencia_horas} horas y ${minutos} minutos desde el Domingo, 18 de diciembre de 2022.`);

}