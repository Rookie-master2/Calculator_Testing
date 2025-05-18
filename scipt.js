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
 