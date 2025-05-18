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
 
function clearExpression() {
 expression = "";
 updateDisplay();
}
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
