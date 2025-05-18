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
   
function backspace() {  //Backspace Last Character
 expression = expression.slice(0, -1);
 updateDisplay();
}
