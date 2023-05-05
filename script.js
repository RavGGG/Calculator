
const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber')
const mathSign = document.querySelector('.mathSign');
const numberBtns = document.querySelectorAll(".button");
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');

let result = '';




function displayNumbers() {
  if (this.textContent === '.' && currentNumber.innerHTML.includes('.'))
    return;
  currentNumber.innerHTML += this.textContent;
}

function operate() {
  if (currentNumber.innerHTML === '' & currentNumber.innerHTML === '-') {
    currentNumber.innerHTML = '-'
  } else if (currentNumber.innerHTML === '') {
    return;
  }

  if (mathSign.innerHTML !== '') {
    showResult();
  }

  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = '';

}


function showResult() {
  let a = Number(currentNumber.innerHTML)
  let b = Number(previousNumber.innerHTML)
  let sign = mathSign.innerHTML

  switch (sign) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = b - a;
      break;
    case 'x':
      result = a * b;
      break;
    case '^2':
      result = b ** a;
      break;
    case ':':
      result = b / a
      if (a === 0) {
        clearAll()
        currentNumber.innerHTML = 'Division by zero is undefined'


        return;
      }
      break;
  }
  mathSign.innerHTML = '';
  previousNumber.innerHTML = '';
  currentNumber.innerHTML = result;
}
function clearAll() {
  currentNumber.innerHTML = '';
  previousNumber.innerHTML = '';
  mathSign.innerHTML = '';
}







operatorBtns.forEach((button) => {
  button.addEventListener('click', operate)
});


numberBtns.forEach((button) => {
  button.addEventListener('click', displayNumbers)
})

equalsBtn.addEventListener('click', showResult);

clearBtn.addEventListener('click', clearAll);








