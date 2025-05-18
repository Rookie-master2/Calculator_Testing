// === Module: Append Button Value to Expression ++  ===  rida2 (feature)
function appendToExpression(value) {
 expression += value;
 updateDisplay();
}
function updateDisplay() {
    expressionEl.textContent = expression;
    resultEl.textContent = expression || "0";
   }
   