function Portero() {
    let ingreso = parseInt(prompt("Ingrese algun dato"));

    if (ingreso >= 18) {
        alert("Acceso concedido. Eres mayor de edad.")

    } else if (ingreso < 18) {
        alert("Acceso denegado. Eres menor de edad")
    };
};

//Ejercicio 2
function Validador() {
    let nombre = prompt("Ingrese un nombre");
}