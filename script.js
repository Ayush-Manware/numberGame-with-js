// function randomNumber(n){
//   return Math.trunc(Math.random(n) * 100 + 1);
// }

// console.log(randomNumber());

let randomNumber = (document.getElementById("$givenNumber").innerHTML =
  Math.trunc(Math.random() * 100 + 1));
  console.log(randomNumber);

let questionMark = document.getElementById("$givenNumber").innerHTML = '?';
document.getElementById('chanceSpan').innerHTML = 100;
let chance = 99;
let highScore = null;


function check() {
  var inputNumber = document.querySelector("input").value;
  inputNumber = parseInt(inputNumber);

  if (inputNumber >= 1 && inputNumber <= 100) {
    if (inputNumber > randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML =
        "Your Number Is Higher";
    } else if (inputNumber < randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML = "Your Number Is Lower";
    } else if (inputNumber === randomNumber) {
      document.getElementsByTagName("h3")[0].innerHTML =
        "You Found The Number";
        document.getElementById("$givenNumber").innerHTML = randomNumber;
        document.getElementById('$checkButton').style.display = 'none';
    }
  }
  else{
    document.getElementsByTagName("h3")[0].innerHTML = 'Invalid Input';
  }

 
  let displayChance = document.getElementById('chanceSpan').innerHTML = chance

  if(inputNumber !== randomNumber){
    chance--;
   }
 
   if(inputNumber === randomNumber){
    let highScoreDisplay = document.getElementById('highScoreSpan').innerHTML = chance;
   }

}



function playAgain(){

  location.reload();





























  // let chance = 100;
  // document.getElementById('chanceSpan').innerHTML = 100;
  // document.body.style.backgroundColor = "rgb(79, 16, 16)";
  // document.getElementById('$checkButton').style.display = 'block';
  
  // document.getElementsByTagName("h3")[0].innerHTML ="Start Guessing";
  // document.getElementById('$input').ariaPlaceholder = 00;
  // (document.getElementById("$givenNumber").innerHTML =
  // Math.trunc(Math.random() * 100 + 1))
  // document.getElementById("$givenNumber").innerHTML = '?';
  // document.querySelector("input").value = "";
  // let randomNumber = (document.getElementById("$givenNumber").innerHTML =
  // Math.trunc(Math.random() * 100 + 1));

  // window.location.reload();
  // document.getElementById('highScoreSpan').innerHTML =  chance;
}
