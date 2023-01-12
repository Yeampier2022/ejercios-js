// ejercico problemas con de referencia de variable error is not indefined

function Mostrarsaludo() {
    var mensaje = 'hola.. este codigo se ejecuta en una function'

    console.log(mensaje);
} 

console.log(mensaje); // mostrara is not defined debido a que no esta a su alcance el scope


var numero = 7

function mostrarNumero() {
    console.log('el numero es: ' + numero);
}

mostrarNumero()