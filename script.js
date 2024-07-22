//Funcion que calcula densidad, volumen y masa dependiendo de los campos que se llenen.
function calculateDensity() {
    var mass = parseFloat(document.getElementById('mass').value);
    var volume = parseFloat(document.getElementById('volume').value);
    var density = parseFloat(document.getElementById('density').value);

//condiciones para el calculo de las operaciones
    if (!isNaN(mass) && !isNaN(volume) && isNaN(density)) {
        density = mass / volume;
        //alert("La densidad es: " + density.toFixed(2) + " toneladas por metro cúbico.");
        Swal.fire({
            title: 'Densidad',
            text: `La Densidad es : ${density.toFixed(2)}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else if (!isNaN(mass) && isNaN(volume) && !isNaN(density)) {
        volume = mass / density;
        //alert("El volumen es: " + volume.toFixed(2) + " metros cúbicos.");
        Swal.fire({
            title: 'Volumen',
            text: `El Volumen es : ${volume.toFixed(2) } ` + `Metros Cúbicos`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else if (isNaN(mass) && !isNaN(volume) && !isNaN(density)) {
        mass = volume * density;
        // alert("La masa es: " + mass.toFixed(2) + " toneladas.");
        Swal.fire({
            title: 'Masa',
            text: `La Masa es : ${mass.toFixed(2)} ` + `Toneladas`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        // alert("Por favor, ingresa al menos dos valores.");
        Swal.fire({
            title: 'Error',
            text: ` Por favor, ingresa al menos dos valores!`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}