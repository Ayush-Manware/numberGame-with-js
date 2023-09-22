let randomNumber = (document.getElementById("$givenNumber").innerHTML =
Math.trunc(Math.random() * 100 + 1));
console.log(randomNumber);

let questionMark = (document.getElementById("$givenNumber").innerHTML = "?");
let chance = 99;
let highScore = null;

function check() {
  var inputNumber = document.querySelector("input").value;
  inputNumber = parseInt(inputNumber);

  if (inputNumber >= 1 && inputNumber <= 100) {
    if (inputNumber > randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML =
        "Your Number was Higher, the Number was :" + randomNumber;
      document.getElementsByTagName("h3")[0].classList.add("red");
    } 
    else if (inputNumber < randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML =
        "Your Number was lower, the Number was :" + randomNumber;
      document.getElementsByTagName("h3")[0].classList.add("red");
    } 
    else if (inputNumber === randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML = "You Found The Number";
      document.getElementById("$givenNumber").innerHTML = randomNumber;
      document.getElementById("$checkButton").style.display = "none";

      document.getElementsByTagName("h3")[0].classList.add("green");
    }
  } 
  else {
    document.getElementsByTagName("h3")[0].innerHTML = "Invalid Input";
  }

  if (inputNumber !== randomNumber) {
    let randomNumber = document.getElementById("$givenNumber");
    randomNumber.classList.add("red");
  }

  if (inputNumber === randomNumber) {
    document.getElementsByTagName("h3")[0].classList.add("green");
    var success = document.getElementById("$success");
    success.classList.remove("hide");
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}

function handleInput() {
  var h3 = document.getElementsByTagName("h3")[0];
  h3.innerHTML = "Start Guessing...";
  document.getElementById("$givenNumber").classList.add("givenNumber");
  document.getElementsByTagName("h3")[0].classList.remove("red");
  document.getElementsByTagName("h3")[0].classList.remove("green");
}

function playAgain() {
  location.reload();
}
