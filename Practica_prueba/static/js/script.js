function EjercicioP1() {

    let texto = parseInt(prompt("Ingrese el numero"));

    let num = 10;
    if (texto > num) {
        alert("Es mayor a 10");
    } else {
        alert("No es mayor a 10");
    }
};

function agregarNumero() {

    let lista = [10, 20, 30]
    lista.push(40);
    alert(lista);


};

function arregloL() {

    let numeros = [5, 10, 15, 20];

    for (let i = 0; i < numeros.length; i++) {
        alert(numeros[i]);
    }
};

/*Crea una función que reciba un número y diga si es par o impar.*/

function parImpar() {
    
    let numero = parseInt(prompt("Ingresa un número")); 

    if(numero % 2 === 0 ) {
        alert("Es par");
    } else {
        alert("No es par");
    }
    
    
};

function numeroMayor() {
    
let numeros = [1, 2, 3, 4, 5];
let resultado = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 3) {
        resultado.push(numeros[i]);
    }
}

alert(resultado);
}