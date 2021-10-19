const letras = ["A", "a", "B", "C", "E", "e"];
let palavra = "Exemplar"

let count = 0;
for (let x of letras) {
    if (x === "E" || x === "e") {
        count += 1;
    }
} if (count === 0){
    console.log("Não foram encontradas nenhuma, letras 'E' ou 'e'. Nem umazinha vei..");
} else {
    console.log(`Foram encontradas ${count} letras "E" ou "e".`)
}
