let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function switchMode() {
  const mode = document.getElementById("modeSwitcher").value;
  const progSec = document.getElementById("programmerSection");
  const basicSec = document.getElementById("basicSection");

  if (mode === "programmer") {
    progSec.style.display = "block";
    basicSec.style.display = "none";
  } else {
    progSec.style.display = "none";
    basicSec.style.display = "block";
  }
}

function convert() {
  const input = document.getElementById("progInput").value.trim();
  const type = document.getElementById("conversionType").value;
  let result = "";

  try {
    switch (type) {
      case "dec2bin":
        result = parseInt(input, 10).toString(2);
        break;
      case "dec2hex":
        result = parseInt(input, 10).toString(16).toUpperCase();
        break;
      case "dec2oct":
        result = parseInt(input, 10).toString(8);
        break;
      case "bin2dec":
        result = parseInt(input, 2).toString(10);
        break;
      case "hex2dec":
        result = parseInt(input, 16).toString(10);
        break;
      case "oct2dec":
        result = parseInt(input, 8).toString(10);
        break;
      default:
        result = "Invalid";
    }
  } catch {
    result = "Error";
  }

  document.getElementById("progResult").innerText = `Result: ${result}`;
}
