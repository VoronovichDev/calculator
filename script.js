function add(a, b) {
   return parseFloat(a) + parseFloat(b)
}
function subtract(a, b) {
   return parseFloat(a) - parseFloat(b)
}
function multiply(a, b) {
   return parseFloat(a) * parseFloat(b)

}
function divide(a, b) {
   return parseFloat(a) / parseFloat(b)
}

function operate(operator, num1, num2) {
   switch (operator) {
      case '+':
         firstValue = add(+num1, +num2)
         display.innerText = firstValue
         break;
      case '-':
         firstValue = subtract(+num1, +num2)
         display.innerText = firstValue
         break;
      case 'x':
         firstValue = multiply(+num1, +num2)
         display.innerText = firstValue
         break;
      case '/':
         if (secondValue === '0') {
            display.innerText = 'Error'
            firstValue = ''
            secondValue = ''
            mathSign = ''
            return
         }
         firstValue = divide(+num1, +num2)
         display.innerText = firstValue
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
   if (display.innerText === '0') {
      display.innerText = ''
   }

   if (secondValue == '' && mathSign == '') {
      firstValue += e.target.value
      display.innerText = firstValue
   }
   else {
      secondValue += e.target.value
      display.innerText = secondValue
   }

   console.log(firstValue, mathSign, secondValue)
   return

})
/*-----------------------------*/

let math = document.querySelector('.math-btns')
/* ------------------------------ */

math.addEventListener('click', (e) => {
   switch (e.target.id) {
      case 'reset':
         firstValue = '';
         secondValue = '';
         mathSign = '';
         display.innerHTML = 0;
         break
      case 'add':
         if (secondValue != '' && mathSign != '') {
            operate(mathSign, firstValue, secondValue)
            secondValue = ''
         }
         mathSign = e.target.value
         // display.innerText = mathSign
         // console.log(firstValue, mathSign, secondValue)
         break
      case 'sub':
         if (secondValue != '' && mathSign != '') {
            operate(mathSign, firstValue, secondValue)
            secondValue = ''
         }
         mathSign = e.target.value
         break
      case 'mult':
         if (secondValue != '' && mathSign != '') {
            operate(mathSign, firstValue, secondValue)
            secondValue = ''
         }
         mathSign = e.target.value
         break
      case 'divide':
         if (secondValue != '' && mathSign != '') {
            operate(mathSign, firstValue, secondValue)
            secondValue = ''
         }
         mathSign = e.target.value
         break
      case 'equal':
         if (secondValue == '') {
            secondValue = firstValue
         }
         operate(mathSign, firstValue, secondValue)
         secondValue = '';
         mathSign = '';
         console.log(firstValue, mathSign, secondValue)
         break
   }

}
)
