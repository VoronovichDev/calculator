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
   switch (operator) {
      case '+':
         firstValue = add(+num1, +num2)
         display.textContent = firstValue
         break;
      case '-':
         firstValue = subtract(+num1, +num2)
         display.textContent = firstValue
         break;
      case 'x':
         firstValue = multiply(+num1, +num2)
         display.textContent = firstValue
         break;
      case '/':
         firstValue = divide(+num1, +num2)
         display.textContent = firstValue
         break;
   }
}
/* ------------------------------ */
let firstValue = ''
let secondValue = ''
let mathSign = ''
/* ------------------------------ */

let display = document.querySelector('.display')
let digits = document.querySelector('.digits-btns')
/* ------------------------------ */

digits.addEventListener('click', (e) => {
   if (e.target.tagName != 'BUTTON') {
      return
   }
   if (display.textContent == 0) {
      display.textContent = ''
   }

   if (secondValue == '' && mathSign == '') {
      firstValue += e.target.value
      display.textContent = firstValue
   } else if (firstValue !== '' && secondValue !== '') {

   }
   else {
      secondValue += e.target.value
      display.textContent = secondValue
   }

   console.log(firstValue, mathSign, secondValue)
   return

})
/*-----------------------------*/

let math = document.querySelector('.math-btns')
/* ------------------------------ */

math.addEventListener('click', (e) => {
   // console.log(e.target.id)
   switch (e.target.id) {
      case 'reset':
         firstValue = '';
         secondValue = '';
         mathSign = '';
         display.innerHTML = 0;
         break
      case 'add':
         mathSign = e.target.value
         display.textContent = mathSign
         console.log(firstValue, mathSign, secondValue)
         break
      case 'sub':
         mathSign = e.target.value
         display.textContent = mathSign
         console.log(firstValue, mathSign, secondValue)
         break
      case 'mult':
         mathSign = e.target.value
         display.textContent = mathSign
         console.log(firstValue, mathSign, secondValue)
         break
      case 'divide':
         mathSign = e.target.value
         display.textContent = mathSign
         console.log(firstValue, mathSign, secondValue)
         break
      case 'equal':
         operate(mathSign, firstValue, secondValue)

         console.log(firstValue, mathSign, secondValue)

         break

   }

}
)
