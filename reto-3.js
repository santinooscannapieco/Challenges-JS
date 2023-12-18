console.log("RETO #3")

function findNaughtyStep(original, modified) {
    // Code here    
    if ( original.length === modified.length + 1 ) {
      for (let i = 0; i < original.length; i++) {
        if(original[i] != modified[i]) {
          return original[i]
        }
      }
    } else if ( original.length + 1 === modified.length ) {
      for (let i = 0; i < modified.length; i++) {
        if(original[i] != modified[i]) {
          return modified[i]
        }
      }
      return modified[i]
    } else {
      return ''
    }
}
  
// Ejemplo de uso
const original = 'xxxx';
const modified = 'xxoxx';
let letra = findNaughtyStep(original, modified) // 'o'
console.log(letra)

const original1 = 'xxoxx'
const modified1 = 'xxxx'
let letra1 = findNaughtyStep(original1, modified1) // 'o'
console.log(letra1)

const original2 = 'abcd'
const modified2 = 'abcde'
let letra2 = findNaughtyStep(original2, modified2) // 'e'
console.log(letra2)

const original3 = 'abcde';
const modified3 = 'abcd';
let letra3 = findNaughtyStep(original3, modified3) // 'e'
console.log(letra3)

const original4 = 'abcde'
const modified4 = 'abcde'
let letra4 = findNaughtyStep(original4, modified4) // ''
console.log(letra4)

