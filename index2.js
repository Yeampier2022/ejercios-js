/**
 * crea un funcion que reciba un arreglo
 * de enteros, y lo ordene en reversa
 */

function revertir(arreglo) {
    // tu codigo aqui 
  var i = 0;
  while (i < arreglo.length - 1) {
    arreglo.splice(i, 0, arreglo.pop());
    i++;
  }
  return arreglo;
}

const arreglo = [4, 5, 6, 82, 8, 21, 78, 98];
console.log(revertir(arreglo));














var arr = [4, 5, 6, 82, 8, 21, 78, 98];

var new_arr = arr.reverse();
console.log(new_arr);
