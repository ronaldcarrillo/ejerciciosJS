'use strict'
/*SCOPE: en programación, el scope se refiere a la visibilidad y accesibilidad de una variable dentro de un programa. En otras palabras, es el alcance en el que una variable puede ser referenciada y usada en el código.


Existen dos tipos de scope: el global y el local. Una variable global se define fuera de una función y puede ser accedida y modificada desde cualquier parte del código. Por otro lado, una variable local se define dentro de una función y solo puede ser accedida y modificada dentro de la misma función.


Es importante tener en cuenta que el scope también se ve afectado por el uso de variables declaradas con var, let y const. Las variables declaradas con var tienen un scope de función o global, mientras que las declaradas con let y const tienen un scope de bloque. Esto significa que una variable declarada con let o const solo puede ser accedida y modificada dentro del bloque en el que se declaró, por ejemplo, dentro de una función o un loop for.


LA COHERCIÓN es un concepto en JavaScript que se refiere a la conversión implícita o explícita de un valor de un tipo de dato a otro tipo de dato.

En JavaScript, hay dos tipos de coerción: la coerción implícita y la coerción explícita.

La coerción implícita ocurre cuando JavaScript convierte automáticamente un tipo de dato en otro tipo de dato sin que se lo pidamos explícitamente. Por ejemplo, si se intenta sumar una cadena de texto y un número, JavaScript convierte automáticamente la cadena en un número antes de realizar la suma.

La coerción explícita ocurre cuando le pedimos a JavaScript que convierta un tipo de dato en otro tipo de dato. Esto se puede hacer utilizando las funciones Number(), String() y Boolean() en JavaScript. */

var variable1 = 12;
console.log(variable1);

function sumar(variable1){
    variable1 = 56;
    console.log(variable1);
}

sumar();
console.log(variable1);