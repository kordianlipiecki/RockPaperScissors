var startGame = document.getElementById("startGame");
var emptyText = document.getElementById("text");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var rock2 = document.getElementById("rock2");
var paper2 = document.getElementById("paper2");
var scissors2 = document.getElementById("scissors2");
var war = document.getElementById("war")
var p1points = document.getElementById("playerOnePoints")
var p2points = document.getElementById("playerTwoPoints")

var playerOneName = "Player One"
var playerTwoName = "Player Two"

var playerOneWeapon = " ";
var playerTwoWeapon = " ";

var br = "<br>"

function add(parameter) {
  emptyText.innerHTML += parameter + br
}

var playerOnePoints = 0
var playerTwoPoints = 0



p1points.innerHTML = playerOnePoints

p2points.innerHTML = playerTwoPoints

function addPoints() {
  playerOnePoints += 1
  console.log(playerOnePoints + " " + playerOneName)
}

function addPoints2() {
  playerTwoPoints += 1
  console.log(playerTwoPoints + " " + playerTwoName)
}

war.addEventListener("click", function War() {
  if (playerOneWeapon == "rock" && playerTwoWeapon == "scissors") {
    console.log("Player One Wins")
    emptyText.innerHTML += "Player One Wins" +br
    addPoints()
  } else if (playerOneWeapon == "rock" && playerTwoWeapon == "paper") {
    console.log("Player Two Wins")
    emptyText.innerHTML += "Player Two Wins" + br
    addPoints2()
  } else if (playerOneWeapon == "rock" && playerTwoWeapon == "rock") {
    console.log("Draw")
    emptyText.innerHTML += "Draw" + br
    addPoints()
    addPoints2()
  } else if (playerOneWeapon == "paper" && playerTwoWeapon == "scissors") {
    console.log("Player Two Wins")
    emptyText.innerHTML += "Player Two Wins" + br
    addPoints2()
  } else if (playerOneWeapon == "paper" && playerTwoWeapon == "paper") {
    console.log("Draw")
    emptyText.innerHTML += "Draw" + br
    addPoints()
    addPoints2()
  } else if (playerOneWeapon == "paper" && playerTwoWeapon == "rock") {
    console.log("Player One Wins")
    emptyText.innerHTML += "Player One Wins" + br
    addPoints()
  } else if (playerOneWeapon == "scissors" && playerTwoWeapon == "scissors") {
    console.log("Draw")
    emptyText.innerHTML += "Draw" + br
    addPoints()
    addPoints2()
  } else if (playerOneWeapon == "scissors" && playerTwoWeapon == "paper") {
    console.log("Player One Wins")
    emptyText.innerHTML += "Player One Wins" + br
    addPoints()
  } else if (playerOneWeapon == "scissors" && playerTwoWeapon == "rock") {
    console.log("Player Two Wins")
    emptyText.innerHTML += "Player Two Wins" + br
    addPoints2()
  }
});



//player One Choose

rock.addEventListener("click", function () {
  playerOneWeapon = "rock"
  console.log(playerOneWeapon + playerOneName)
})
paper.addEventListener("click", function () {
  playerOneWeapon = "paper"
  console.log(playerOneWeapon + playerOneName)
})
scissors.addEventListener("click", function () {
  playerOneWeapon = "scissors"
  console.log(playerOneWeapon + playerOneName)
})

//playerTwoChoose

rock2.addEventListener("click", function () {
  playerTwoWeapon = "rock"
  console.log(playerTwoWeapon + playerTwoName)
})
paper2.addEventListener("click", function () {
  playerTwoWeapon = "paper"
  console.log(playerTwoWeapon + playerTwoName)
})
scissors2.addEventListener("click", function () {
  playerTwoWeapon = "scissors"
  console.log(playerTwoWeapon + playerTwoName)
})


