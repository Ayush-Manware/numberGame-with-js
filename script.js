var randomNumber = (document.getElementById("$givenNumber").innerHTML =
  Math.trunc(Math.random() * 100 + 1));
console.log(randomNumber);

// let hint = document.getElementById("hintPara");
// if (randomNumber % 2 === 0) {
//   hint.innerHTML = "The Number Is Even";
// } else if (randomNumber % 2 === !0) {
//   hint.innerHTML = "The Number Is Odd";
// }

let questionMark = (document.getElementById("$givenNumber").innerHTML = " ? ");
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
    } else if (inputNumber < randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML =
        "Your Number was lower, the Number was :" + randomNumber;
      document.getElementsByTagName("h3")[0].classList.add("red");
    } else if (inputNumber === randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML = "You Found The Number";
      document.getElementById("$givenNumber").innerHTML = randomNumber;
      document.getElementById("$checkButton").style.display = "none";

      document.getElementsByTagName("h3")[0].classList.add("green");
    }
  } else {
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

let count = 00;
var main = document.getElementById("$main");
var isOpen = false;

function deposit() {
  if (!isOpen) {
    isOpen = true;
    var blurDiv = document.createElement("div");
    blurDiv.setAttribute("class", "blurDiv");
    main.appendChild(blurDiv);

    var addMoney = document.createElement("div");
    addMoney.setAttribute("class", "addMoney");
    blurDiv.appendChild(addMoney);

    var moneyHeading = document.createElement("h1");
    moneyHeading.setAttribute("class", "moneyHeading");
    moneyHeading.innerHTML = "Deposit";
    addMoney.appendChild(moneyHeading);

    var minimumAmount = document.createElement("p");
    minimumAmount.innerHTML = "Minimum deposit amount is Rs. 200!!";
    minimumAmount.setAttribute("class", "minimumAmount");
    addMoney.appendChild(minimumAmount);

    var moneyInput = document.createElement("input");
    moneyInput.setAttribute("class", "moneyInput");
    moneyInput.setAttribute("id", "$moneyInput");
    moneyInput.setAttribute("type", "number");
    addMoney.appendChild(moneyInput);

    // var currentBalance = document.getElementById("$balanceCount").innerHTML = count
    var addButton = document.createElement("Button");
    addButton.innerHTML = "Add Money";
    addButton.setAttribute("class", "addButton");
    addButton.setAttribute("id", "$addButton");
    addMoney.appendChild(addButton);
    addButton.addEventListener("click", () => {
      let moneyInput = document.getElementById("$moneyInput").value;
      let balanceCount = document.getElementById("$balanceCount");
      if (moneyInput >= 200) {
        let newBalance = (count += parseInt(moneyInput));
        balanceCount.innerHTML = newBalance;
      } else {
        alert("Minimum Amout is 200");
      }
      isOpen = false;
      main.removeChild(blurDiv);
    });

    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.setAttribute("id", "$cancelButton");
    cancelButton.setAttribute("class", "cancelButton");
    addMoney.appendChild(cancelButton);
    cancelButton.addEventListener("click", () => {
      isOpen = false;
      main.removeChild(blurDiv);
    });
  } else {
    return null;
  }
}

let currentBet= 0;

function ten() {
  const totalBet = document.getElementById("$totalBet");
  var tenBet = currentBet += 10
  totalBet.innerHTML = tenBet
}

function fifty() {
  const totalBet = document.getElementById("$totalBet");
  var fiftyBet = currentBet += 50
  totalBet.innerHTML = fiftyBet
}

function hundred(){
  const totalBet = document.getElementById("$totalBet");
  var hundredBet = currentBet += 100
  totalBet.innerHTML = hundredBet
}

function fiveHundred(){
  const totalBet = document.getElementById("$totalBet");
  var fiveHundred = currentBet += 500
  totalBet.innerHTML = fiveHundred
}

function thousand(){
  const totalBet = document.getElementById("$totalBet");
  var thousand = currentBet += 1000
  totalBet.innerHTML = thousand
}

function fiveThousand(){
  const totalBet = document.getElementById("$totalBet");
  var fiveThousand = currentBet += 5000
  totalBet.innerHTML = fiveThousand;
}

function tenThousand(){
  const totalBet = document.getElementById("$totalBet");
  var tenThousand = currentBet += 10000
  totalBet.innerHTML = tenThousand
}

function fiftyThousand(){
  const totalBet = document.getElementById("$totalBet");
  var fiftyThousand = currentBet += 50000
  totalBet.innerHTML = fiftyThousand
}

function oneLakh(){
  const totalBet = document.getElementById("$totalBet");
  var oneLakh = currentBet += 100000
  totalBet.innerHTML = oneLakh
}