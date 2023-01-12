// ejercicio 1 : Definir una funcion el algoritmo de ordenamiento merge-sort.

Array.prototype.mergeSort = function () {
  if (this.length <= 1) {
    return this;
  }

  const mitad = parseInt(this.length / 2);
  const izquierda = this.slice(0, mitad).mergeSort();
  const derecha = this.slice(mitad, this.length).mergeSort();

  const merge = function (izquierda, derecha) {
    const datos = [];

    while (izquierda.length > 0 && derecha.length) {
      datos.push(
        izquierda[0] <= derecha[0] ? izquierda.shift() : derecha.shift()
      );
    }
    return datos.concat(izquierda).concat(derecha);
  };
  return merge(izquierda, derecha);
};

let numeros = [11, 7,  3, 23, 2, 5, 29, 23];
console.log(numeros);
numeros.mergeSort();
console.log(numeros);
console.log();

let resultado = numeros.mergeSort();
console.log(resultado);
