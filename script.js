function add(a, b) {
   return a + b
}
function subtract(a, b) {
   return a - b
}
function multiply(a, b) {
   return a * b

}
function divide(a, b) {
   return a / b
}

function operate(operator, num1, num2) {
   switch (operator.toString()) {
      case '+': console.log(add(num1, num2))
         break;
      case '-': console.log(subtract(num1, num2))
         break;
      case '*': console.log(multiply(num1, num2))
         break;
      case '/': console.log(divide(num1, num2))
         break;
   }
}

operate('+', 10, 20)
operate('-', 10, 20)
operate('*', 10, 20)
operate('/', 10, 20)