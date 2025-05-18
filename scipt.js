<<<<<<< HEAD
<<<<<<< HEAD
function applyPercentage() {
    const match = expression.match(/(\d+\.?\d*)$/);
    if (match) {
      const number = parseFloat(match[1]);
      const percentValue = number / 100;
      expression = expression.replace(/(\d+\.?\d*)$/, percentValue.toString());
      updateDisplay();
    }
    // Hello 
  }
 

function handleSquareRoot() {
    const match = expression.match(/(\d+\.?\d*)$/);
    if (match) {
      const number = parseFloat(match[1]);
      const sqrtValue = Math.sqrt(number);
      expression = expression.replace(/(\d+\.?\d*)$/, sqrtValue.toString());
      updateDisplay();
    }
   }
function handleExponent() { //Phal
    expression += "**";
    updateDisplay();
    }
   
=======
// === Module: Append Button Value to Expression ++  ===  rida2 (feature)
function appendToExpression(value) {
 expression += value;
 updateDisplay();
}
function updateDisplay() {
    expressionEl.textContent = expression;
    resultEl.textContent = expression || "0";
   }
   
>>>>>>> feature/issue#6_Append_Button
=======
// === Module: Element References ===  Rida1 (feature)
const expressionEl = document.querySelector(".expression");
const resultEl = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;
   
   
      switch (value) {
        case "C":
          clearExpression();
          break;
   
   
        case "⌫":
          backspace();
          break;
   
   
        case "=":
          evaluateExpression();
          break;
   
   
        case "%":
          applyPercentage();
          break;
   
   
        case "≠":
          toggleNegative();
          break;
   
   
        case "^":
          handleExponent();
          break;
   
   
        case "√":
          handleSquareRoot();
          break;
   
   
        default:
          appendToExpression(value);
          break;
      }
    });
   });
   
>>>>>>> feature/issue#3_Element-reference
