var numFibo=prompt("Por favor ingrese un numero.");


if (!isNaN(numFibo)) {
   conversorFibonacci(numFibo) 
}else{
    alert("Por favor ingrese un dato valido");
    var numFibo2=prompt("Por favor ingrese un numero.");
if (!isNaN(numFibo2)) {
    conversorFibonacci(numFibo) 
}
}


function conversorFibonacci(numFibo) {
    var a = 0;
    var b = 1;
    var fibonacci = "";
  
    for (var i = 0; i < numFibo; i++) {
      fibonacci += a + " ";
  
      var temp = a + b;
      a = b;
      b = temp;
    }
    console.log("Serie de Fibonacci hasta el número " + numFibo + ":");
  console.log(fibonacci);
}