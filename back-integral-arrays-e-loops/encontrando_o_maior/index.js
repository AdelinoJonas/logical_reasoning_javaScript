const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorNumero = 0;

for(let i of numeros){
    if(i > maiorNumero){
        maiorNumero = i
    }
}console.log(maiorNumero);