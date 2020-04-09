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
  const value = e.target.innerText;
  updateDisplay(value);
}

function updateDisplay(value){
  const displayText = document.getElementById("display");
  displayText.textContent = value;
}

const clickItems = document.querySelectorAll('.clickable');
for (let i=0; i<clickItems.length; i++){
  clickItems[i].addEventListener("click", buttonHandler, false);
}

for (let i=0; i<clickItems.length; i++){
  console.log(clickItems[i].attributes)
}
