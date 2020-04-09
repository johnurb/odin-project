function add(n1, n2){
  return n1 + n2;
}

function subtract(n1, n2){
  return n1 - n2;
}

function multiply(n1, n2){
  return n1 * n2;
}

function divide(n1, n2){
  if(n2 == 0){
    return undefined;
  } else {
    return n1 / n2;
  }
}

function operate(operator, n1, n2){
  switch(operator){
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      return undefined;
  }
}

function buttonHandler(e){
  const value = e.currentTarget.name;
  updateDisplay(value);
}

function updateDisplay(value){
  const displayText = document.querySelector('p');
  displayText.textContent += value;


}

const buttons = document.querySelectorAll('[name]');
for (let i=0; i < buttons.length; i++){
  buttons[i].addEventListener('click', buttonHandler, false);
}
