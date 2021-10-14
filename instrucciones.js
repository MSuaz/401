// Clase 401 EPPR - INTRO A JAVASCRIPT
// Definición de los Pasos 1 a 4. (Funciones Anónimas en Constantes)
const paso1 = ()=>{
    console.log("> Primer Paso:")
    console.log('Muevete al branch "tarea" con el comando')
    console.log('   git checkout tarea')
}
const paso2 = ()=>{
    console.log("> Segundo Paso:")
    console.log("Abre el archivo para iniciar a editarlo")
    console.log('   open index.js')
}
const paso3 = ()=>{
    console.log("> Tercer Paso:")
    console.log("Lee todos los comentarios del archivo")
    console.log("y completa los pasos necesarios")
}
const paso4 = ()=>{
    console.log("> Cuarto Paso:")
    console.log("Completa la actividad y actualiza tu FORK al repo 401")
    console.log('Crea un Pull Request y luego un Merge')
    console.log("NOTA: Recuerda trabajar sobre tu propio FORK")
}

// Ejecutar función "main"
main()

// Definición de la función principal llamada "main"
function main(){
    welcome("401", "Intro a JS")
    console.log("------------------")
    paso1()
    paso2()
    paso3()
    paso4()
    final()
}
function welcome(number, title = ""){
    console.log(`Bienvenido a la clase ${number} de EPPR : ${title}`);
}
function final(){
    console.log("------------------")
    console.log('TIP: En el branch "main" puedes encontrar el archivo index.js')
    console.log("con todas las respuestas para esta tarea.")
    console.log("------------------")
    console.log("Para continuar, escribe el comando")
    console.log("    git checkout tarea\n")
}
// FINAL DEL ARCHIVO
return false