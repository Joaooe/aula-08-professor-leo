const array :Array<number>=[6, 8, 23,4,9]
let menornumero= array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] <menornumero) {
        menornumero= array[i];
    }

        
 
    
}
console.log("o menor numero é:",menornumero);