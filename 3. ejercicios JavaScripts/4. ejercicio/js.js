'use strict'
/*Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:

Renta                                    Tipo impositivo
Menos de 10000€                          5%
Entre 10000€ y 20000€                    15%
Entre 20001€ y 35000€                    20%
Entre 35001€ y 60000€                    30%
Más de 60000€                            45%

Escribir un programa que con una variable tenga del usuario su renta anual y muestre por pantalla lo que tiene que pagar. */

var renta = 10000

if(renta < 10000){
    renta = renta + (renta * 0.5) 
    console.log('Su renta a es de: ' + renta);
}else if(renta >= 10000 && renta <= 20000){
    renta = renta + (renta * 0.15) 
    console.log('Su renta a es de: ' + renta);
}else if(renta >= 20001 && renta <= 35000){
    renta = renta + (renta * 0.20) 
    console.log('Su renta a es de: ' + renta);
}else if(renta >= 35001 && renta <= 60000){
    renta = renta + (renta * 0.30) 
    console.log('Su renta a es de: ' + renta);
}else{
    renta = renta + (renta * 0.45) 
    console.log('Su renta a es de: ' + renta);
}