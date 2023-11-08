//1
let nombre= prompt("ingrese su nombre")
alert( "bienvenid@ " +  nombre)
//2
let num =9
let num2=3
alert(num + num2)
alert(num*num2)
alert(num/num2)
alert(num-num2)

//3
let numero=prompt("ingrese un numero")
let numero2=prompt("ingrese otro numero")
let suma=Number(numero)+ Number(numero2)

alert(suma)
alert(numero*numero2)
alert(numero/numero2)
alert(numero-numero2)

//4
let cuotas = prompt("ingrese la cantidad de cuotas a hacer la compra")
let precio =prompt("ingrese el precio de cuotas")
let total = cuotas * precio 
alert("ustede debe pagar un total de  " + total )

//5

let sueldo = prompt("ingrese su sueldo")
let auto=prompt("ingrese lo que gasta en el auto mensualmente")
let alquiler =prompt("ingrese lo que gasta en alquiler ")
let gastosGenerales=prompt("ingrese lo que gasta generalmente ")
let gastos= sueldo-auto-alquiler-gastosGenerales
alert("lo que le queda del sueldo es " + gastos)
