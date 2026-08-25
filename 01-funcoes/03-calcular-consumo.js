// EXERCÍCIO 03 - CALCULAR CONSUMO
// Crie uma função que receba a distância percorrida e os litros utilizados.
// A função deve calcular e retornar o consumo médio em quilômetros por litro.
// Teste a função e mostre o resultado no console.
//
// Escreva sua solução abaixo:

// EXERCÍCIO 03 - CALCULAR CONSUMO
// Crie uma função que receba a distância percorrida e os litros utilizados.
// A função deve calcular e retornar o consumo médio em quilômetros por litro.
// Teste a função e mostre o resultado no console.
//
// Escreva sua solução abaixo:

function calcularConsumo(distancia, litros)     {
    return distancia / litros;
}

let consumo = calcularConsumo(300, 20);

console.log(`Consumo médio: ${consumo} km/l`);