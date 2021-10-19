const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; //emCentavos
const rendMinimo = 2855970;

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("**ISENTA**");
} else if (totalDeRendimentos <= rendMinimo) {
    console.log("**VAZA LEAO! JA TA DIFICIL SEM VOCE**");
} else if (totalDeRendimentos > rendMinimo) {
    console.log ("**PEGA LEAO**");
};

// Caso a pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Caso esses total de rendimentos seja superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.
// * Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA** 
// * Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE** 
// * Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**