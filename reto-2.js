function manufacture(gifts, materials) {
    // Code here
    const fabricable = []

    for (let i = 0; i < gifts.length; i++) {
      let palabra = gifts[i]
      let pasa = 0
      for (let j=0; j < palabra.length; j++) {
        let letra = palabra[j]
        for (let h=0; h < materials.length; h++) {
          if(letra === materials[h]) {
            pasa += 1
            break
          }
        }
      }
      if (pasa === palabra.length) {
        fabricable.push(palabra)
      }
    }
  
    return fabricable
}

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

const resultado1 = manufacture(gifts1, materials1) // ["tren", "oso"]
console.log(resultado1)
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

const resultado2 = manufacture(gifts2, materials2) // ["puzzle"]
console.log(resultado2)

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

const resultado3 = manufacture(gifts3, materials3) // []
console.log(resultado3)