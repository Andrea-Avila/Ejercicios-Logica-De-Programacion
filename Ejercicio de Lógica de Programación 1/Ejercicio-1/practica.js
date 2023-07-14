const num1=prompt("Por favor ingrese un numero entero ;)");
const num2=prompt("Por favor ingrese el segundo numero entero ;)");
const num3=prompt("Por favor ingrese un tercer numero entero ;)");
var $p=document.getElementsByClassName("p");

//Cuando el numero uno es mas grande
if (num1>num2 && num1>num3) {
    console.log("El numero ", num1, " es mayor");
    if(num2>num3){
        console.log("El numero ", num2, " es el segundo mas grande");
     } else if(num3>num2){
        console.log("El numero ", num3, " es el segundo mas grande");
        }
    if(num3>num2){
        console.log("El numero ", num2, " es el mas chiquito");
    } else if(num2>num3){
        console.log("El numero ", num3, " es el mas chiquito"); //Si no se cumple nunguno de los dos es
    if (num2==num3) {
        console.log("El numero ", num2, " es igual a",num3);
    }else if(num1==num3){
        console.log("El numero ", num1, " es igual a",num3);

    }
    }

//Cuando el numero dos es mas grande
}else if (num2>num1 && num2>num3) { //Logica de que el dos es mas grande 
    console.log("El numero ", num2, " es mayor");
    if(num1>num3){
        console.log("El numero ", num1, " es el segundo mas grande");
     } else if(num3>num1){
        console.log("El numero ", num3, " es el segundo mas grande");
        }
    if(num3>num1){
        console.log("El numero ", num1, " es el mas chiquito");
    } else if(num1>num3){
        console.log("El numero ", num3, " es el mas chiquito"); //Si no se cumple nunguno de los dos es
}
}

//Cuando el numero tres es mas grande
else if (num3>num1 && num3>num2) { //Logica de que el dos es mas grande 
    console.log("El numero ", num3, " es mayor");
    if(num1>num2){
        console.log("El numero ", num1, " es el segundo mas grande");
     } else if(num2>num1){
        console.log("El numero ", num2, " es el segundo mas grande");
        }
    if(num2>num1){
        console.log("El numero ", num1, " es el mas chiquito");
    } else if(num1>num2){
        console.log("El numero ", num2, " es el mas chiquito"); //Si no se cumple nunguno de los dos es
}
}


else if(num1==num2) {
    console.log("El numero ", num1, " es igual a ", num2);
}
else if(num2==num3) {
    console.log("El numero ", num2, " es igual a ", num3);
}
else if(num3==num1) {
    console.log("El numero ", num3, " es igual a ", num1);
}
