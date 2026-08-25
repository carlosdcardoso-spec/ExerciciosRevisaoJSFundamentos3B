// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:

let resposta = {
    status: 200,
    quantidade: 2,
    clientes: [
        { nome: "João", idade: 30 },
        { nome: "Maria", idade: 25 }
    ]
};

let respostaJSON = JSON.stringify(resposta);

let respostaObjeto = JSON.parse(respostaJSON);

console.log(respostaObjeto.status);
console.log(respostaObjeto.clientes);
