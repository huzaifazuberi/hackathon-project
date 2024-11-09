// Select the color box and button elements
const colorBox = document.getElementById("colorBox") as HTMLDivElement;
const changeColorButton = document.getElementById("changeColorButton") as HTMLButtonElement;

// Function to change the color of the color box
function changeColor() {
  // Array of colors to choose from
  const colors = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow", "lightpink"];
  
  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Set the new color
  colorBox.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
changeColorButton.addEventListener("click", changeColor);
