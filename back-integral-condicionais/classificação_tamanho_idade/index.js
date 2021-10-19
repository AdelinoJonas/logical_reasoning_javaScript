const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150){
    console.log("**ACESSO NEGADO**")
} else if (ehEstudante === true) {
    console.log("**10 reais**");
} else { 
    console.log("**20 reais**");
};



// * Menores de 12 anos
// * Maiores de 65 anos
// * Que possuam qualquer patologia cardíaca
// * Menores de 150cm de altura

// Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:

// * 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// * 20 reias, caso contrário

// Se papel é imprimir na tela:

// * **ACESSO NEGADO** caso a pessoa não possa brincar
// * "**10 reais**" caso esse seja o valor que a pessoa deve pagar para brincar
// * **20 reais** caso esse seja o valor que a pessoa deve pagar para brincar