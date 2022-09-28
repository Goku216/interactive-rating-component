var button = document.querySelectorAll(".number-box");

function setActive(element) {
  for (i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
  element.classList.add("active");
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    setActive(this);
  });
}
