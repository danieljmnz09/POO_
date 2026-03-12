/*#1 */

function Contador() {
    let numeros = [];
    const container = document.getElementById('resultadoContainer')
    const resultado = document.getElementById('result1')
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    resultado.textContent = `Contando: ${numeros.join(" - ")}`;
    container.classList.remove('d-none');
}