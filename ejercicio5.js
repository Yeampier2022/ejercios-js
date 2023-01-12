// ejercicio 12: Estudiar el comportamiento del alcance o contexto formal.

function function1() {
  var a = 2;

  function function3() {
    var b = 5;

    function function5() {
      console.log(a, b);
    }
  }
}

function function2() {
    var a = 7;

    function function4(){
        console.log(a);
    }
}

function1()
function2()
