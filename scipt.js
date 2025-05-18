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
   