// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:

let jogos = [
    {
        titulo: "GTA V",
        plataforma: "PC",
        classificacao: 18
    },
    {
        titulo: "Minecraft",
        plataforma: "PlayStation",
        classificacao: 10
    },
    {
        titulo: "FIFA 26",
        plataforma: "Xbox",
        classificacao: 10
    }
];

jogos.forEach(function(jogo) {
    console.log("Título:", jogo.titulo);
    console.log("Plataforma:", jogo.plataforma);
});
