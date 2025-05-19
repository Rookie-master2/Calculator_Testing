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


function evaluateExpression() {
   try {
     const result = eval(expression);
     resultEl.textContent = result;
     expressionEl.textContent = expression;
     expression = result.toString();
   }
   catch {
  
   }
}


function toggleNegative() {
   const match = expression.match(/(\-?\d+\.?\d*)$/);
   if (match) {
     const number = parseFloat(match[1]);
     const toggled = -number;
     expression = expression.replace(/(\-?\d+\.?\d*)$/, toggled.toString());
     updateDisplay();
   }
}


function applyPercentage() {
   const match = expression.match(/(\d+\.?\d*)$/);
   if (match) {
     const number = parseFloat(match[1]);
     const percentValue = number / 100;
     expression = expression.replace(/(\d+\.?\d*)$/, percentValue.toString());
     updateDisplay();
   }
 }


function appendToExpression(value) {
 expression += value;
 updateDisplay();
}


function updateDisplay() {
 expressionEl.textContent = expression;
 resultEl.textContent = expression || "0";
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


function clearExpression() {
  expression = "";
  

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


function handleExponent() { 
  expression += "**";
  updateDisplay();
}
   
function backspace() { 
  expression = expression.slice(0, -1);
  updateDisplay();
}
}
