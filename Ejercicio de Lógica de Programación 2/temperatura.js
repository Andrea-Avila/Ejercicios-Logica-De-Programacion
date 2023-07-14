var temperatura=prompt("Por favor ingrese la temperatura  en grados Celcius.");


if (!isNaN(temperatura)) {
   conversorFahrenheit(temperatura) 
   conversorKelvin(temperatura) 
}else{
  
    alert("Por favor ingrese un dato valido");
}
function conversorFahrenheit(temperatura)  {
    let Celcius= (temperatura * 1.8);
    let valorFahrenheit=(Celcius+32);

    let element =document.getElementById("resultado");
    element.innerHTML = "La temperatura es de " + valorFahrenheit + "°F";

}
function conversorKelvin(temperatura) {
    let Kelvins= (temperatura*1); //Desconozco por que no me lo manda como un numero
    let valorKelvin=(Kelvins+273.15);

    let element =document.getElementById("resultado2");
    element.innerHTML = "La temperatura es de " + valorKelvin + "°K";

}