function sumadenumeros(){
    
    let numero1 = +prompt("ingresa el primer numero");
    let numero2 = +prompt("ingresa el segundo numero");
    alert(`La suma de los numeros es: ${numero1 + numero2}`);
}

function esEntero(){

    let numero = +prompt("Ingresa un Numero")
    if (isNaN(numero)){
        alert ("Ups... " + numero + " no es un número.");
    } else {
        if (numero % 1 == 0) {
            alert (`su 20% es: ${numero*(20/100)}`);
        } else {
            alert ("Es un numero decimal");
        }
    }
}
function ingresametros(){
    
    let numero = +prompt("ingresa numero en metros");
    alert(`En centimetros es: ${numero*100} y en milimetros ${numero*1000}`);

}

function triangulo(){
    let numero = +prompt("ingrese la base")
    let numero2 = +prompt("ingrese la altura")
    alert(`El area del triangulo es: ${(numero*numero2)/2}`);

}

function pulgadas(){
    let numero = +prompt("ingrese medida en pulgadas")
    alert(`en milimitros es: ${numero*25.4}`);

}

function sumard(){
let num = prompt("Ingresar un número de 3 cifras");

var sumarDigitos = function(num) {
    if(0<num) {
      return (num%10) + sumarDigitos(Math.floor(num/10));
    }
    return num;
  };

 alert(`La suma de los dígitos elevado al cuadrado es ${(sumarDigitos(num))*(sumarDigitos(num))}`);
}
function CalculoPorcentaje(){
    let dinero = prompt("Ingrese un monto de dinero");
    let R1 = (dinero*30/100);
    let R2 = (dinero*20/100);
    let R3 = (dinero*50/100);
    alert(`en primero le toca: ${R1} al segundo le toca:${R2} al tercero le toca ${R3}`);
  }

  function CalcularIgv(){
    let Precio = +prompt("Ingrese su precio");
    let IGV = (Precio * 19/100);
    let Total = (Precio + IGV);
    alert(`el igv es: ${IGV} el precio final es:${Total}`)
  }

function CalcularEntrada(){
    let general = +prompt("Ingresar entradas generales vendidas");
    let mayor = +prompt("Ingresar entradas para mayores de 65 vendidas");
    let menor = +prompt("Ingresar entradas de menores de edad vendidas");
    precioG = 150
    precioM = 50
    precioMe = 80
    alert(`La ganancia en entradas generales es ${general*precioG} soles, la ganancia en mayores de 65 es ${mayor*precioM} soles, la ganancia en menores de edad es ${menor*precioMe} y el total recaudado es ${(general*precioG)+(mayor*precioM)+(menor*precioMe)} soles.`);
 }



















//let nombre = "Dinely"
//let edad = 25
///let estabecada = true 

