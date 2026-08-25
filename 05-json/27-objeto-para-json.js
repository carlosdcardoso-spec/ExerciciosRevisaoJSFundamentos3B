// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto reserva com codigo, hospede e numeroNoites.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:

let reserva = {
    codigo: 101,
    hospede: "Carlos",
    numeroNoites: 3
};

let reservaJSON = JSON.stringify(reserva);

console.log(reservaJSON);
