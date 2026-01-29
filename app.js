function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
      
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: Please enter valid numbers';
        return;
    }
      
    const sum = num1 + num2;
    document.getElementById('result').textContent = 'Result: ' + sum;
}
function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
      
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: Please enter valid numbers';
        return;
    }
      
    const difference = num1 - num2;
    document.getElementById('result').textContent = 'Result: ' + difference;
}
function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
      
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: Please enter valid numbers';
        return;
    }
      
    const product = num1 * num2;
    document.getElementById('result').textContent = 'Result: ' + product;
}
function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
      
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: Please enter valid numbers';
        return;
    }
      
    if (num2 === 0) {
        document.getElementById('result').textContent = 'Result: Cannot divide by zero';
        return;
    }
      
    const quotient = num1 / num2;
    document.getElementById('result').textContent = 'Result: ' + quotient;
}