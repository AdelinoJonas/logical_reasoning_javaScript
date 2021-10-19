//valor do produto comprado.
const valorDoProduto = 100000;
const valorDoProdutoEmReais = (valorDoProduto - valorDoProduto * 0.1) /100

//quantidade de parcelas
const quantidadeDoParcelamento = 10;
const valorDaParcela = valorDoProdutoEmReais / quantidadeDoParcelamento;

//valor pago
const valorPago = 30000;
const valorPagoEmReais = (valorPago - valorPago * 0.1) /100

const quantidadeRestante = quantidadeDoParcelamento - valorPagoEmReais / valorDaParcela;
let faltaPagar = valorDoProdutoEmReais - valorPagoEmReais;

console.log(`falta pagar ${quantidadeRestante} parcelas de   R$${faltaPagar}`);