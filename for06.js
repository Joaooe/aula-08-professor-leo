var array = [6, 8, 23, 4, 9];
var menornumero = array[0];
for (var i = 0; i < array.length; i++) {
    if (array[i] < menornumero) {
        menornumero = array[i];
    }
}
console.log("o menor numero é:", menornumero);
