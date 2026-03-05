console.log("Conectado a JS")

/* Ejercicio 1: El Mensaje Desordenado (Push y Pop)
Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios.*/



//Ejercicio 1
function construirFrase() {
    let palabras = ["programar", "es"]
    palabras.push(" increible")
    palabras.push(" borrar")
    palabras.pop()
    alert(palabras)
}

//Ejercicio 2
function gestionarFila() {
    let alumnos = ["Juan", "Maria", "Pedro"]
    alumnos.unshift("Luis")
    persona = alumnos.shift()
    alert(`Entro ${persona} y la fila ahora es ${alumnos}`)
}

//Ejercicio 3
function reordenarNumero() {
    let datos = [3, "gatos", "negros", "duermen"]
    datos[0] += 2
    alert(datos.join(" "))
}

//Ejercicio 4
function coordenadasM() {
    let matriz = [[10, 20], [30, 40]];
    let final = matriz[0][0] + matriz[1][1]
    alert(`El resultado da ${final}`)
}

//Ejercicio 5
function intruSos() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push(5);
    alert(`El resultado es ${datos}`)
}

//Ejercicion 6 

function traducirAcciones() {
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", " analiza"], ["falla", "reinicia"]];
    let palabra = sujetos[0] + verbos[0][1]
    alert(`${palabra}`)
}

//Ejercicio 7
function limpiezaDatos() {
    let inventario = [" Error", " Laptop", " Mouse", " Teclado", " Virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("Monitor")
    alert(inventario.join(""))
}


//Ejercicio 8
function matrizM() {
    let tablero = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1;
    alert(tablero)
}

//Ejercicio 9
function medico() {
    let pacientes = ["Ana", "Betto"];
    pacientes.push("Carlos", "Diana");
    pacientes.shift();
    pacientes.unshift("Sonia");
    alert(`Pacientes en espera: ${pacientes.length}. Siguiente paciente: ${pacientes[0]}`);
}

//Ejercicio 10
function extraccionP() {
    let caja = [
        ["frutas", "verduras"],
        [["manzana", "pera"], ["tomate", "lechuga"]]
    ];
    let fruta = caja[1][0][1];
    let verdura = caja[1][1][1];
    alert(`En la canasta hay ${fruta} y ${verdura}.`)
}
