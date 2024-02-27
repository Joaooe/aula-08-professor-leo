 let numbers: number[]= [1,2,3,4,5,6,7,8,9,10,];
let sum: number = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] %2 === 0) {
      sum +=    numbers[i];
    }
    
}

console.log('the result of sum is: '+ sum);