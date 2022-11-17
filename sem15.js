//Ejercicio1
function Bonificacion(){
    let nombre = +prompt("Ingrese Nombre")
    let SueldoBasico = +prompt("Ingrese el sueldo basico");
    let CantidadHijos = +prompt("Ingrese la cantidad de hijos");
    let BonoHijo = SueldoBasico*(7/100);
    if (CantidadHijos >= 1) {
        document.write(`<h1>Su sueldo es de: ${BonoHijo}; y su suedo final es: ${BonoHijo + SueldoBasico} </h1>`);
    }
    else{
        alert("No tiene hijos")
    }
}

//Ejercicio2
function masQuinientos(){
    let cantidad = +prompt("Ingrese un numero")
    if (cantidad > 500) {
        document.write(`<h1>El 18% es: ${cantidad*(18/100)}</h1>`);
    }
    else{
        alert("el numero es menor o igual a 500")
    }
}

//Ejercicio3
function factor(){
    let dato1 = +prompt("ingresar numero")
    let r = 1
    for(let i = dato1; i>0; i--){
    r *= i;
    }
    alert(r)
}

//Ejercicio4
function compra(){
    let cantidad = +prompt("Ingrese un numero")
    if (cantidad > 150) {
        alert(`El descueto del 12% es: ${cantidad*(12/100)} el monto a pagar es ${cantidad - cantidad*(12/100) } `);
    }
    
    else{
        alert("el monto es < o = a 150")
    }
}

//Ejercicio5
function promedio(){
    let nombre = prompt("Ingrese su nombre")
    let nota1 = +prompt("Parcial")
    let nota2 = +prompt("Examen Final")
    let practicas = +prompt("Promedio Practicas")
    let promedio = nota1 + (nota2*2) + practicas
    if (promedio > 10){
        alert(`${nombre} su promedio es: ${promedio/4}`);
    }
    else{
        alert("No Aprobo")
    }
}
