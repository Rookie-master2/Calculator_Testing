// === Module: Square Root √ ===   Hong (feature)
function handleSquareRoot() {
    const match = expression.match(/(\d+\.?\d*)$/);
    if (match) {
      const number = parseFloat(match[1]);
      const sqrtValue = Math.sqrt(number);
      expression = expression.replace(/(\d+\.?\d*)$/, sqrtValue.toString());
      updateDisplay();
    }
   }