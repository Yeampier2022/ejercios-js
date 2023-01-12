// Ejercicio 8: Determinar si una variable ha sido declarada con la function typeof

let a;
let b = 11;

console.log(typeof a);
console.log(typeof b);

if(typeof a === 'undefined') {
    console.log('la varirable `a` no tiene asignado un valor');
} else {
    console.log('la variable `a` tiene asignado un valor');
}