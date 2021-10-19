// function obterFaixaEtaria(idade){
//     if (idade < 25) {
//         return "jovem";
//     } else if(idade < 65) {
//         return "adulto";
//     } else {
//         return "idoso";
//     }
// }

let jonas = {
        nome: "Jonas",
        idade: 15,
        profissao: "Programador",
        altura: 1.89,
        apresentar: function () {
            const faixaEtaria = this.obterFaixaEtaria(this.idade);

            console.log(`Olá! Sou ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`);
        },
            obterFaixaEtaria: function () {
        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade < 65) {
            return "adulto";
        } else {
            return "idoso";
        }
    }
};

jonas.apresentar();
console.log(jonas.obterFaixaEtaria());


// let felipe = {
//     nome: "Felipe",
//     idade: 25,
//     profissao: "Médico",
//     altura: 1.84
// };
// felipe.apresentar();

// let denis = {
//     nome: "Denis",
//     idade: 72,
//     profissao: "Engenheiro",
//     altura: 1.75
// };
// denis.apresentar();