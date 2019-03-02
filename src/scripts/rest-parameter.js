// rest Parameters 
function printCards(num1, ...nums) {
    console.log(`num1: ${num1}`);
    nums.forEach(num =>{
        console.log(num);
    });

    
// console.log(`num1: ${num1}`);
// console.log(`num1: ${num2}`);
// console.log(`num1: ${num3}`);

}

printCards(1,2,3);