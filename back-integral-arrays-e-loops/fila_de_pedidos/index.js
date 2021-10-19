const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

let pedidoConcluido = false;

let novoPedido = true;


if (pedidoConcluido === true) {
    filaDePedidos.shift();
}
if (novoPedido === true) {
    filaDePedidos.push("pedido 15");
}

console.log(filaDePedidos);
