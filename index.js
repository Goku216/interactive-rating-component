var button = document.querySelectorAll(".number-box");

var clickedButton;

const result = document.getElementById("result");

function setActive(element) {
  for (i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
  element.classList.add("active");
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    setActive(this);
    clickedButton = this.id;
    displayRating(clickedButton);

  });
}

function displayRating(text) {
  var myArray = ["one", "two" , "three" , "four" , "five"];

  for (let i = 0; i < 5; i++) {
    if (text === myArray[i]) {
      j = i+1;
      result.innerHTML = "You selected " + j + " out of 5"
    }
    
  }
}

document.getElementById("submit-button").addEventListener("click", myFunction);

function myFunction() {
  var x = document.querySelector(".content-box")
  var y = document.querySelector(".second-content")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    } 
    

}





