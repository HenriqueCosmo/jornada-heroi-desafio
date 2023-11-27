// Instruções para entrega
//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
let levelHero;
let victoriesHero = -1;
let defeatsHero = 5;

function matchStatistics(victories, defeats) {
    let sum = victories - defeats;
    return sum;
}
let results = matchStatistics(victoriesHero, defeatsHero);

if (results < 10 ) {
    levelHero = "Ferro";
} else if (results < 20) {
    levelHero = "Bronze";
}else if (results < 50) {
    levelHero = "Prata";
}else if (results < 80) {
    levelHero = "Ouro";
}else if (results < 90) {
    levelHero = "Diamante";
}else if (results < 100) {
    levelHero = "Lendario";
} else if (results >= 100) {
    levelHero = "Imortal"
} else {
    console.log("Valores incorretos, reveja suas vitórias e derrotas")
}

console.log(`O Herói tem de saldo de ${results} está no nível de ${levelHero}`)