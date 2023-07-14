var numer = prompt("Por favor ingrese un numero");
if (!isNaN(numer)) {
    factorizador(numer)
} else {
    alert("Por favor ingrese un dato valido");
    var numer = prompt("Por favor ingrese un numero");
}
function factorizador(numer) {
    var numfac = 1; // Variable para almacenar el factorial, se inicia en 1

    for (var i = 1; i <= numer; i++) {
        numfac *= i; // Multiplicar el valor actual de numfac por el número de la iteración (1, 2, 3, ..., num)
    }
    let elementic = document.getElementById("factor");
    elementic.innerHTML = "El factorial de " + numer + " es: " + numfac;
    // console.log("El factorial de " + numer + " es: " + numfac);
}
