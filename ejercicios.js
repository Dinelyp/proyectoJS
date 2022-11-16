// Ejercicio 1
function CalcularPorcentaje(){
    let mujeres = +prompt("Ingresar numero de estudiastes mujeres:");
    let varones = +prompt("Ingresar numero de estudiantes varones");
    let total = mujeres + varones
    alert(`El % de mujeres es: ${(mujeres*100)/total}% el % de varones: ${(varones*100)/total}%`);
 }
// Ejercicio 2
function invertir(){
    let montoInventir = +prompt("Ingresar monto a invertir")
    document.write(`<ul>
                        <li>Avenida la Mar = ${montoInventir*(35/100)} </li>
                        <li>Avenida Abancay  = ${montoInventir*(25/100)} </li>
                        <li>Avenida 28 de Julio  = ${montoInventir*(10/100)} </li>
                        <li>Avenida Aviación  = ${montoInventir*(15/100)} </li>
                        <li>Avenida Tacna = ${montoInventir*(15/100)} </li>
                 </ul>`);

}   
// Ejercicio 3
function CalcularEntrada(){
    let general = +prompt("Ingresar entradas generales vendidas");
    let mayor = +prompt("Ingresar entradas para mayores de 65 vendidas");
    let menor = +prompt("Ingresar entradas de menores de edad vendidas");
    precioG = 150
    precioM = 50
    precioMe = 80
    alert(`La ganancia en entradas generales es ${general*precioG} soles, la ganancia en mayores de 65 es ${mayor*precioM} soles, la ganancia en menores de edad es ${menor*precioMe} y el total recaudado es ${(general*precioG)+(mayor*precioM)+(menor*precioMe)} soles.`);
 }