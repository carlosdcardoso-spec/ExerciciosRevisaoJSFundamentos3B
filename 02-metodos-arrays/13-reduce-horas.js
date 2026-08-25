// EXERCÍCIO 13 - REDUCE - HORAS TRABALHADAS
// Considere as horas trabalhadas: [8, 7, 8, 6, 8].
// Utilize reduce() para calcular o total de horas trabalhadas na semana.
// Mostre o resultado.
//
// Escreva sua solução abaixo:

let horas = [8, 7, 8, 6, 8];

let totalHoras = horas.reduce(function(total, hora) {
    return total + hora;
}, 0);

console.log(totalHoras);
