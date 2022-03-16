// Function declaretion
function add(num1, num2) {
    return num1 + num2;
}

const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const add3 = function (num1, num2) {
    return num1 + num2;
}

// arrow function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(1, 3)
const sum2 = add2(1, 3)
const sum3 = add3(1, 3)
const sum4 = add4(1, 3)
console.log(sum1, sum2, sum3, sum4);
// document.getElementById('my-btn').onclick = function handleEvent(){

// }


