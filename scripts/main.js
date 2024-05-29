let currentOperand = "";
let previousOperand = "";
let operation = null;

function handleInput(input) {
  if (isFinite(input) || input === "." || input === "π") {
    appendNumber(input);
  } else if (input === "C") {
    clearDisplay();
  } else if (input === "=") {
    calculate();
  } else {
    chooseOperation(input);
  }
}

function appendNumber(number) {
  if (number === "π") {
    currentOperand = Math.PI.toString();
  } else if (currentOperand.includes(".") && number === ".") {
    return;
  } else {
    currentOperand += number.toString();
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
  updateDisplay();
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

function updateDisplay() {
  document.getElementById("display").value = currentOperand;
}

function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operation = null;
  updateDisplay();
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const code = event.code;

  if (isFinite(key) || key === "." || key === "π") {
    appendNumber(key);
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Enter" || code === "NumpadEnter") {
    calculate();
  } else if (key === "+" || code === "NumpadAdd") {
    chooseOperation("+");
  } else if (key === "-" || code === "NumpadSubtract") {
    chooseOperation("-");
  } else if (key === "*" || code === "NumpadMultiply") {
    chooseOperation("*");
  } else if (key === "/" || code === "NumpadDivide") {
    chooseOperation("/");
  }
});

document.getElementById("theme-switcher").addEventListener("change", function () {
  document.body.classList.toggle("dark-theme", this.checked);
  document.body.classList.toggle("light-theme", !this.checked);
});

document.getElementById("color-picker").addEventListener("input", function () {
  document.getElementById("calculator").style.backgroundColor = this.value;
});

document.getElementById("button-color-picker").addEventListener("input", function () {
  let buttons = document.querySelectorAll(".buttons button");
  buttons.forEach((button) => {
    button.style.backgroundColor = this.value;
  });
});
