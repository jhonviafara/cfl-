/*Crea una función que acepte tres números como argumentos y devuelva 
el máximo de los tres.*/

/*let num1 = 3;
let num2 = 8;
let num3 = 223;
function cualMayor (a,b,c){
   if (num1 > num2 & num1 > num3) {
     console.log(`el numero mayor es ${num1}`)
   }  else if(num2 > num1 & num2 > num3){
    console.log(`el numero mayor es ${num2}`)
   }else{
    console.log(`el numero mayor es ${num3}`)
   }
}
cualMayor()


Crea una función que imprima 
los números pares del 1 al 10 utilizando un bucle “while”.
let contador = 1;
while (contador <= 10)  {
  if (contador%2 ===0) {
    console.log(contador)
  }
  contador ++
}
Crea una función que imprima los números del
 1 al 10 utilizando un bucle “for”.

for (let i = 0; i <= 10; i++) {
  if (i%2 ===0) {
    console.log(i)
  }
}

Crea una función que calcule el área de un círculo dado su radio.


function whatIsArea( a) {
  let pi = Math.PI; // obtengo el valor de pi 
  let area = pi * a **2;
  return area
}

console.log(whatIsArea(13))

Crea una función que reciba una cadena de 
texto y devuelva la longitud de la cadena.

function lengCadenaText(palabra){
  let sinEspacio = palabra.replace(/\s/g, "")
  return ` la cadena de texto tiene ${sinEspacio.length} caracteres`
} 
console.log(lengCadenaText("madre mia como estas parcero"))

Utiliza el operador de concatenación + para unir dos cadenas de texto.

let firstCadenaTex = "hola ";
let secondCadenaText = " mundo"
let union = firstCadenaTex+secondCadenaText;
console.log(union)


Crea un array con nombres de frutas y utiliza el método push() para añadir una nueva fruta al final.

let Frutas = ["manzana", "pera", "uva"];
Frutas.push("durazno");
console.log(Frutas);
Utiliza el método pop() para eliminar la última fruta del array.
let Frutas = ["manzana", "pera", "uva"];
Frutas.pop()
console.log(Frutas);


Crea una función que reciba un array de números y utilice el método map() para duplicar cada número y devolver un nuevo array con los valores duplicados.

let arrayOriginal =[1,2,3,4,5,6,7,8,9];
let NuevoArray = arrayOriginal.map(e => e *2)
console.log(NuevoArray)

//usando una function tradicional

function nuevoArray(a) {
  return a.map(e=>e*2) 
}
console.log(nuevoArray([1,3,5,7,9]))

//usando el metodo map para trabajar objetos

const personas = [
  {nombre:"jhon",edad : 18,sexo:"masculino"},
  {nombre:"raul",edad : 22,sexo:"masculino"},
  {nombre:"andrea",edad : 34,sexo:"femenino"}
]
let edades = personas.map(persona=>persona.edad)
let nombres = personas.map(persona=> persona.nombre)
console.log(`las edades de los  usuarios son:${edades}`)
console.log(`los nombres de los usuarios son:${nombres}`)

Crea una función que reciba una cadena de texto y utilice el método split()
 para dividir la cadena en palabras.
 
 function textDividido(text) {
   return text.split(" ")
  }
  console.log(textDividido("hola mama como te encuentras"))
 
  Utiliza el método toUpperCase() para convertir una cadena de texto en mayúsculas.

  let mayuscula = "jhon alejandro"
  mayuscula = mayuscula.toUpperCase()
  console.log(mayuscula) 

  Crea una función que reciba una cadena de texto y utilice el método replace() para reemplazar todas las apariciones de una palabra por otra.
  */ 

 function alterarCadena(e){
  e = e.trim("")
    return e
 } 
 
 console.log(alterarCadena( "hola soy una prueba "))