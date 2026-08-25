// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:

class Pagamento {
    processar() {
        return "Processando pagamento...";
    }
}

class Pix extends Pagamento {
    processar() {
        return "Pagamento realizado via Pix.";
    }
}

class Cartao extends Pagamento {
    processar() {
        return "Pagamento realizado via cartão.";
    }
}

let pagamentos = [
    new Pix(),
    new Cartao()
];

pagamentos.forEach(function(pagamento) {
    console.log(pagamento.processar());
});
