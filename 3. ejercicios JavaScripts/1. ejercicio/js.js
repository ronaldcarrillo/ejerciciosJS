'use strict'
/*Escribir un programa que con dos variables en el que se almacenen dos números y muestre por pantalla su división. Si el divisor o el dividendo es cero el programa debe mostrar un error. */

variable1 = 10
variable2 = 5

if(variable1 != 0 && variable2 != 0){
    console.log(variable1 / variable2);
}else{
    console.log('Se ha producido un error...');
}