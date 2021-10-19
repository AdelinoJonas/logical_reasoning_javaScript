const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomeComA = [];

for(let i of nomes) {
    if(i[0] === "A" || i[0] === "a"){
        nomeComA.push(i);
    }
}
console.log(nomeComA);