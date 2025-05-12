const colorPicker = document.getElementById("colorPicker");
const saveBtn = document.getElementById("saveBtn");
const animateBtn = document.getElementById("animateBtn");
const circle = document.getElementById("circle");

window.onload = function () {
  const savedColor = localStorage.getItem("favoriteColor");
  if (savedColor) {
    circle.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

saveBtn.onclick = function () {
  const selectedColor = colorPicker.value;
  localStorage.setItem("favoriteColor", selectedColor);
  circle.style.backgroundColor = selectedColor;
};

animateBtn.onclick = function () {
  circle.classList.remove("animate");
  void circle.offsetWidth;
  circle.classList.add("animate");
};
