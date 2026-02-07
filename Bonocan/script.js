function showAlert() {
  alert("Button clicked!");
}

function displayInput() {
  const input = document.getElementById("textInput").value;
  document.getElementById("output").textContent = "You typed: " + input;
}
