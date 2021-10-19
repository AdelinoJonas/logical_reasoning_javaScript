const rendaMensalEmCentavos = 300000;
const rendaMensalEmReais = (rendaMensalEmCentavos - rendaMensalEmCentavos * 0.1) / 100;
const valorDaParcela = rendaMensalEmReais * 0.18;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;
const totalJaPagoPeloAlunoEmReais = (totalJaPagoPeloAluno - totalJaPagoPeloAluno * 0.1) / 100;


if (valorDaParcela === 0) {
    console.log("Você não precisa pagar, pois não possui a renda suficiente.");
} else if (mesesDecorridos > 60) {
    console.log("O aluno não deve nada.");
} else if (totalJaPagoPeloAlunoEmReais === 18.000) {
    console.log("Dívida quitada.");
} else if (rendaMensalEmReais < 2.000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else {
    console.log(`O valor da parcela desse mês é ${valorDaParcela} reais`);
}