// var miNumero=prompt("Por favor ingrese un numero para intentar averiguar cual es el numero ");

// var numeroRandom=Math.floor(Math.random() * 10);


// if (!isNaN(miNumero)) {
//     generador(miNumero) 
//  }else{
//      alert("Por favor ingrese un dato valido");
//      var miNumero=prompt("Por favor ingrese un numero.");
//  if (!isNaN(miNumero)) {
//      generador(miNumero) 
//  }
//  return
//  }
// function generador(miNumero) {
// if (miNumero==numeroRandom) {
//     alert("Felicidades, ganaste");
// }
// else{
//     alert("lo siento, vuelve a intentarlo");
//     var miNumero=prompt("Por favor ingrese un numero para intentar averiguar cual es el numero ");
// }    
// }
var numeroRandom = Math.floor(Math.random() * 3);
var miNumero = prompt("Por favor ingrese un número para intentar adivinar:");

while (isNaN(miNumero)) {
    alert("Por favor ingrese un número válido.");
    miNumero = prompt("Por favor ingrese un número:");
}

generador(miNumero);

function generador(numero) {
    numero = parseInt(miNumero); 
    if (numero === numeroRandom) {
        let element =document.getElementById("numsec");
        element.innerHTML = "Felicidades adivinaste el número, era  " +numero ; 
    } else if(numero) {
        while (numero != numeroRandom) {
            // alert("Por favor ingrese un número válido.");
            miNumero = prompt("Por favor ingrese un nuevo número:");
            numero = parseInt(miNumero); 
    
        }

        let element =document.getElementById("numsec");
        element.innerHTML = "Error, vuelve a intentar, ya colocaste el numero " +numero ; 
            console.log("No adivinaste el número. El número correcto era: " + numeroRandom);
            
        }
        console.log("No adivinaste el número. El número correcto era: " + numeroRandom);
    }

