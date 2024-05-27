let currentOperand = "";
let previousOperand = "";
let operation = null;

function appendNumber(number) {
  if (number === "π") {
    currentOperand = Math.PI.toString();
  } else if (currentOperand.includes(".") && number === ".") return;
  else {
    currentOperand = currentOperand.toString() + number.toString();
  }
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  operation = op;
  if (operation !== "^") {
    previousOperand = currentOperand;
    currentOperand = "";
  }
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = current === 0 ? "Error" : prev / current;
      break;
    case "sin":
      computation = Math.sin(prev);
      break;
    case "cos":
      computation = Math.cos(prev);
      break;
    case "tan":
      computation = Math.tan(prev);
      break;
    case "log":
      computation = Math.log10(prev);
      break;
    case "ln":
      computation = Math.log(prev);
      break;
    case "exp":
      computation = Math.exp(prev);
      break;
    case "sqrt":
      computation = Math.sqrt(prev);
      break;
    case "cbrt":
      computation = Math.cbrt(prev);
      break;
    case "!":
      computation = factorial(prev);
      break;
    case "^":
      computation = Math.pow(prev, current);
      break;
  }
  currentOperand = computation;
  operation = null;
  previousOperand = "";
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

function updateDisplay() {
  // update your display
}
