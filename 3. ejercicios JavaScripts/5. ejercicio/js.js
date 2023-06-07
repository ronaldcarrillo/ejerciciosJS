'use strict'
/*Investigar y realizar un programa que dependiendo del dato IMC que se ingrese, se determina que peso tiene la personar. */

var peso = 80
var estura = 1.75

imc = peso / estura

if(imc < 18.5){
    console.log('¡Ojo! estás bajo de peso')
}else if(imc >= 18.5 && imc <= 24.9){
    console.log('Tu peso es normal')
}else if(imc >= 25.0 && imc <=29.9){
    console.log('Estás en sobre peso')
}else{
    console.log('¡Ojo! tienes obesidad')
}