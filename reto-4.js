console.log("RETO #4")

/* function decode(message) {
    // Code here
    return ''
}


const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus */


/* 
// Tu array con cadenas que contienen paréntesis y su contenido
let miArray = ['hola (odnum)', 'otra cadena (contenido)', 'tercera (texto)'];

// Función para quitar solo los paréntesis
function quitarParentesis(cadena) {
    return cadena.replace(/[()]/g, '');
}

// Aplicar la función a cada elemento del array
let miArraySinParentesis = miArray.map(quitarParentesis);

// Imprimir el resultado
console.log(miArraySinParentesis);
 */


/* REEVER PARA ENTENDER MEJOR */

function decode(mensaje) {
    let pila = [];
    let resultado = '';
  
    for (let i = 0; i < mensaje.length; i++) {
      if (mensaje[i] === '(') {
        // Iniciar reversión para este paréntesis
        pila.push([]);
      } else if (mensaje[i] === ')') {
        // Finalizar reversión para este paréntesis
        const caracteresInvertidos = pila.pop().reverse().join('');
        if (pila.length === 0) {
          // Si no hay paréntesis anidados, agregar al resultado
          resultado += caracteresInvertidos;
        } else {
          // Si hay paréntesis anidados, agregar al último paréntesis abierto
          pila[pila.length - 1].push(caracteresInvertidos);
        }
      } else {
        // Agregar caracteres a la pila actual
        if (pila.length === 0) {
          resultado += mensaje[i];
        } else {
          pila[pila.length - 1].push(mensaje[i]);
        }
      }
    }
  
    return resultado;
  }
  
  // Ejemplos
  const a = decode('hola (odnum)');
  console.log(a); // hola mundo
  
  const b = decode('(olleh) (dlrow)!');
  console.log(b); // hello world!
  
  const c = decode('sa(u(cla)atn)s');
  console.log(c); // santaclaus
  