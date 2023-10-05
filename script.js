var randomNumber = (document.getElementById("$givenNumber").innerHTML =
  Math.trunc(Math.random() * 100 + 1));
console.log(randomNumber);

// let hint = document.getElementById("hintPara");
// if (randomNumber % 2 === 0) {
//   hint.innerHTML = "The Number Is Even";
// } else if (randomNumber % 2 === !0) {
//   hint.innerHTML = "The Number Is Odd";
// }

let questionMark = (document.getElementById("$givenNumber").innerHTML =
  " 1 - 100 ");

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
      document.getElementsByTagName("h3")[0].innerHTML = "Win Win Win!!!";
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
    document.getElementById("$givenNumber").classList.add("green");
    document.getElementsByTagName("h3")[0].classList.add("green");

    setTimeout(() => {
      location.reload();
    }, 2500);
  }
}

function handleInput() {
  var h3 = document.getElementsByTagName("h3")[0];
  h3.innerHTML = "Start Guessing...";
  let randomNumber = document.getElementById("$givenNumber");
  randomNumber.classList.remove("red");
  let afterWrong = document.getElementsByTagName("h3")[0];
  afterWrong.classList.remove("red");
  document.getElementById("$givenNumber").classList.add("givenNumber");
}

function playAgain() {
  location.reload(false);
}

var count = parseInt(localStorage.getItem("depositAmount")) || 0;

var balanceCount = document.getElementById("$balanceCount");
balanceCount.innerHTML = count;
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

    var addButton = document.createElement("Button");
    addButton.innerHTML = "Add Money";
    addButton.setAttribute("class", "addButton");
    addButton.setAttribute("id", "$addButton");
    addMoney.appendChild(addButton);
    addButton.addEventListener("click", () => {
      let moneyInput = document.getElementById("$moneyInput").value;

      if (moneyInput >= 200) {
        let newBalance = (count += parseInt(moneyInput));
        localStorage.setItem("depositAmount", newBalance);
        let getStore = localStorage.getItem("depositAmount");
        balanceCount.innerHTML = getStore;
      } else {
        alert("Minimum Amout is 200");
      }
      var getStore = localStorage.getItem("depositAmount");
      balanceCount.innerHTML = getStore;
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

let currentBet = 0;
function ten() {
  const totalBet = document.getElementById("$totalBet");
  var tenBet = (currentBet += 10);
  if (balanceCount.innerHTML >= 10) {
    totalBet.innerHTML = tenBet;
    balanceCount.innerHTML -= 10;
  } else {
    alert("Insufficiant Funds");
  }
}

function fifty() {
  const totalBet = document.getElementById("$totalBet");
  var fiftyBet = (currentBet += 50);
  if (balanceCount.innerHTML >= 50) {
    totalBet.innerHTML = fiftyBet;
    balanceCount.innerHTML -= 50;
  } else {
    alert("Insufficiant Funds");
  }
}

function hundred() {
  const totalBet = document.getElementById("$totalBet");
  var hundredBet = (currentBet += 100);
  if (balanceCount.innerHTML >= 100) {
    totalBet.innerHTML = hundredBet;
    balanceCount.innerHTML -= 100;
  } else {
    alert("Insufficiant Funds");
  }
}

function fiveHundred() {
  const totalBet = document.getElementById("$totalBet");
  var fiveHundred = (currentBet += 500);
  if (balanceCount.innerHTML >= 500) {
    totalBet.innerHTML = fiveHundred;
    balanceCount.innerHTML -= 500;
  } else {
    alert("Insufficiant Funds");
  }
}

function thousand() {
  const totalBet = document.getElementById("$totalBet");
  var thousand = (currentBet += 1000);
  if (balanceCount.innerHTML >= 1000) {
    totalBet.innerHTML = thousand;
    balanceCount.innerHTML -= 1000;
  } else {
    alert("Insufficiant Funds");
  }
}

function fiveThousand() {
  const totalBet = document.getElementById("$totalBet");
  var fiveThousand = (currentBet += 5000);
  if (balanceCount.innerHTML >= 5000) {
    totalBet.innerHTML = fiveThousand;
    balanceCount.innerHTML -= 5000;
  } else {
    alert("Insufficiant Funds");
  }
}

function tenThousand() {
  const totalBet = document.getElementById("$totalBet");
  var tenThousand = (currentBet += 10000);
  if (balanceCount.innerHTML >= 10000) {
    totalBet.innerHTML = tenThousand;
    balanceCount.innerHTML -= 10000;
  } else {
    alert("Insufficiant Funds");
  }
}

function fiftyThousand() {
  const totalBet = document.getElementById("$totalBet");
  var fiftyThousand = (currentBet += 50000);
  if (balanceCount.innerHTML >= 50000) {
    totalBet.innerHTML = fiftyThousand;
    balanceCount.innerHTML -= 50000;
  } else {
    alert("Insufficiant Funds");
  }
}

function oneLakh() {
  const totalBet = document.getElementById("$totalBet");
  var oneLakh = (currentBet += 100000);
  if (balanceCount.innerHTML >= 100000) {
    totalBet.innerHTML = oneLakh;
    balanceCount.innerHTML -= 100000;
  } else {
    alert("Insufficiant Funds");
  }
}
