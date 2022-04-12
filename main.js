/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/
let contador = ('Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado')
let palabra = ('estudiante')
function contarPalabra(nombre){
    console.log(contador.replaceAll("estudiante", "Koder"));


}
let sentence = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"; 
console.log(sentence.match(/estudiante/gi)); 
let totalWords = sentence.match(/estudiante/gi); 
contarPalabra(contador);


/*
Ejercicio 2:
    Comparar 2 string, y determinar cual de los dos es el más largo
    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/

let text = prompt(" ")
let text1 = prompt (" ")

function count (a,b){
   if (a > b){
       console.log(a, "es mas largo el estring");
   } else if (a < b){
       console.log(b, "es mas largo el estring");
   }
}

count(text, text1)


/*
Ejercicio 3:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

let words = prompt("");
let myArray = words.split(" ");
let word = myArray [0];
let word2 = myArray [1];

function wordsTwo(a,b){
if(a.length > b.length){
    console.log(a, "es mas larga");
}else if (a.length < b.length){
    console.log( b, "es mas larga");
}
}
wordsTwo (word, word2)

/*
Ejercicio 4
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

let number1 = prompt("Indicar numero")
let operador = prompt ("Que operacion necesita realizar")
let number2 = prompt("Ingresar un segundo numero")


number1 = Number(number1)
number2 = Number(number2)

function operation (number1, operador, number2){
    if(operador == "multiplicar" ){
        console.log(number1 * number2)
    } else if (operador == "dividir"){
        console.log(number1 / number2)
    }  else if ( operador == "suma"){
        console.log(number1 + number2)
    } else if (operador == "resta"){
        console.log(number1 - number2);
    }
}

operation (number1, operador, number2)
