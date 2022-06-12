// Hacer un programa que combine sabores de helados con chispas usando for
//  - Sabor chocolate, Vainilla
//  - Chispas de colores, chispas de chocolate, chispas de estrellas

var sabores = ['Chocolate', 'Vainilla', 'Fresa']
var chispas = ['Chispas de Colores', 'Chispas de Chocolate', 'Chispas de Estrellas']

for (let index = 0; index < sabores.length; index++) {
    for (let j = 0; j < chispas.length; j++) {
        console.log(`Helado sabor ${sabores[index]} con ${chispas[j]}`)    
    }
}

// rama de rama
// Agregaré coflicto de códigos