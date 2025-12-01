let display = document.getElementById("displayDown");
let upperDisplay = document.getElementById("displayUp");
let isOperator = false;
function appendToDisplay(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
  upperDisplay.value = "";
}

function clearUp() {
  display.value = "";
}

function changeSign() {
  if (display.value === "" || display.value === "0") return;

  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function calculateResult() {
  try {
    upperDisplay.value = display.value;
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
