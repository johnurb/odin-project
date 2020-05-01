const add = (a, b) => (toIntOrFloat(a) + toIntOrFloat(b));
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => b == 0 ? undefined : (a / b);

let resultText;

const memory = {
  digits: [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  operators: ["divide", "multiply", "subtract", "add", "equals"],
  specials: ["ac", "pm", "backspace"],

  numberString: "0",
  operator: "",
  firstNumber: "0",
  update: function(clickedButtonValue){
    if (this.digits.includes(clickedButtonValue)){
        if (this.numberString == "0"){
          this.numberString = clickedButtonValue;
        } else if (clickedButtonValue == "."){
          if (!this.numberString.includes(".")){
            this.numberString += clickedButtonValue;
          }
        } else {
          this.numberString += clickedButtonValue;
        }
    } else if (this.operators.includes(clickedButtonValue)){
      switch(clickedButtonValue){
        case "equals":
          this.numberString = operate(this.operator, this.firstNumber, this.numberString);
          this.operator = "";
          this.firstNumber = this.numberString;
          break;
        default:
          this.firstNumber = this.numberString;
          this.operator = clickedButtonValue;
          this.numberString = "0"
          break;
      }
    } else {
      switch(clickedButtonValue){
        case "ac":
          this.numberString = "0";
          this.operator = "";
          this.firstNumber = "0";
          break;
        case "pm":
          if(this.numberString[0] == "-"){
            this.numberString = this.numberString.slice(1);
          } else if (this.numberString[0] == "0"){
            break;
          }
          else {
            this.numberString = "-" + this.numberString;
          }
          break;
        case "backspace":
          this.numberString = this.numberString.slice(0, -1);
          if (this.numberString == ""){
            this.numberString = "0";
          }
          break;
      }
    }
    resultText.textContent = this.numberString;
  }
}

function operate(operator, a, b){
  switch(operator){
    case "add":
      return add(a,b);
    case "subtract":
      return subtract(a,b);
    case "multiply":
      return multiply(a,b);
    case "divide":
      return divide(a,b);
    default:
      return undefined;
  }
}

function toIntOrFloat(a){
  if(String(a.includes("."))){
    return parseFloat(a);
  }
  return parseInt(a);
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
