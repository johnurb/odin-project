const add = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => b == 0 ? undefined : (a / b);

let resultText;

const memory = {
  digits: [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operators: ["divide", "multiply", "subtract", "add", "equals"],
  specials: ["ac", "pm", "backspace"],

  numberString: "0",

  lastClickedButton: "0",
  update: function(clickedButtonValue){

    if (this.digits.includes(clickedButtonValue)){
      if (this.digits.includes(this.lastClickedButton)){
        if (this.numberString == "0"){
          this.numberString = clickedButtonValue;
        } else {
          this.numberString += clickedButtonValue;
        }
      }
    } else if (this.operators.includes(clickedButtonValue)){
      console.log("no");
    } else {
      switch(clickedButtonValue){
        case "ac":
          this.numberString = "0";
          break;
        case "pm":
          if(this.numberString[0] == "-"){
            this.numberString[0] = "0";
          } else if (this.numberString[0] == "0"){
            break;
          }
          else {
            this.numberString = "-" + this.numberString;
          }
          break;
      }
    }

    resultText.textContent = this.numberString;
  }
}

function operate(operator, a, b){
  switch(operator){
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "*":
      return multiply(a,b);
    case "/":
      return divide(a,b);
    default:
      return undefined;
  }
}

function buttonClickHandler(e){
  let clickedButton = e.toElement.id;
  memory.update(clickedButton);
}



const buttons = document.getElementsByTagName("button");
for (let button of buttons){
  button.addEventListener("click", buttonClickHandler);
}

resultText = document.querySelectorAll(".result")[0]
