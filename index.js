// EPPR Clase 401 : Archivo con las respuestas
// Definición de una constante con una función anónima.
const getStatus = (name, age, online) => `${name} is ${age} years old and is ${(!!online)?'now':'NOT'} online`
// Definir 3 Variables de tipo Número, Cadena de Texto y Booleanos.
var age = 33; // Esta variable debe ser un Número
var name = "Mr. Dr. Bean"; // Esta variable debe ser una Cadena de Texto
var online = true; // Esta variable debe ser un Booleano (Verdadero o Falso)
// Programa Principal.
console.log('------ Running Program --------')
printTypeOf(age) // El resultado debe ser "number"
printTypeOf(name) // El resultado debe ser "string"
printTypeOf(online) // El resultado debe ser "boolean"
console.log('------ Running getStatus() --------')
console.log( getStatus(name, age, online) )
// Definición de otras funciones personales.
function printTypeOf( value ){
    console.log( `Value: "${value}"` )
    console.log( `Type of: ${typeof(value)}` )
}
// Esto hará que NodeJS cierre el servidor que se ha creado.
return false;