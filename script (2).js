const romanMap = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

// Convert integer to roman
function toRoman(num) {
  if (num < 1 || num > 3999) return null;
    
  let result = '';
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// Convert roman to integer
function fromRoman(str) {
  const romanValues = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  str = str.toUpperCase().trim();
    
  let total = 0;
  let previousValue = 0;
    
  for (let i = str.length -1; i >= 0; i--) {
    const currentValue = romanValues[str[i]];
    if (!currentValue) return null;
        
    if (currentValue < previousValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    previousValue = currentValue;
  }
  return total;
}

// Interface
function convertToRoman() {
  const input = document.getElementById('input').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
    
  errorDiv.textContent = '';
  resultDiv.textContent = '';
    
  if (!input) {
    showError('Enter a number');
    return;
  }
    
  const number = parseInt(input);
  if (isNaN(number) || number < 1 || number > 3999) {
    showError('Invalid number (1-3999)');
    return;
  }

  const roman = toRoman(number);
  resultDiv.textContent = roman;

  if (typeof gtag === 'function') {
    gtag('event', 'integer_to_roman_calculated', {
      'roman': roman
    });
  }
}

function convertToInteger() {
  const input = document.getElementById('input').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
    
  errorDiv.textContent = '';
  resultDiv.textContent = '';
    
  if (!input) {
    showError('Enter a roman number');
    return;
  }
    
  const result = fromRoman(input);
  if (!result || result > 3999) {
    showError('Roman invalid number');
    return;
  }
    
  resultDiv.textContent = result;

  if (typeof gtag === 'function') {
    gtag('event', 'roman_to_integer_calculated', {
      'integer': result
    });
  }
}

function showError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
  setTimeout(() => errorDiv.textContent = '', 3000);
}