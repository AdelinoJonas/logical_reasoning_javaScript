//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const valorDoProdutoEmReais = (valorDoProduto - valorDoProduto * 0.1) / 100


if (tipoDePagamento === "credito") {
    let valorDoDesconto = valorDoProdutoEmReais * 0.05; 
    let valorComDesconto = valorDoProdutoEmReais - valorDoDesconto;
    console.log(`Valor a ser pago é: R$${valorComDesconto.toFixed(2)}`)
};