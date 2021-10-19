const original = [5, 7, 13, 17, 26, 34, 118, 245];

let numeAteVinte = [0];

for(let i of original){
    if (i > 0 && i < 20){
        numeAteVinte = i;
        console.log(numeAteVinte);
    }
} 
