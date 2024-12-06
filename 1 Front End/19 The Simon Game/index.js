// Initialize Variables
var buttonColors = ["green", "red", "blue", "yellow"];
var gameStart = false;
var gameLevel = 0;
var gameChosenColor = [];
var userClickColor = [];

// Implement Game Start Logic
$("body").on("keypress", function () {
  if (!gameStart) {
    $("#top-header").text("Level " + gameLevel);
    nextSequence();
    gameStart = true;
  }
});

// Implement User Click
$(".btn").on("click", function () {
  var currentClick = $(this).attr("id");
  userClickColor.push(currentClick);

  playSound(currentClick);
  animatePress(currentClick);
  checkAnswer(userClickColor.length - 1);
});

// Check User Answer
function checkAnswer(currentLevel) {
  if (gameChosenColor[currentLevel] === userClickColor[currentLevel]) {
    console.log("Success");
    console.log(gameChosenColor[currentLevel]);
    console.log(userClickColor[currentLevel]);

    if (userClickColor.length === gameChosenColor.length) {
      console.log(userClickColor.length);
      console.log(gameChosenColor.length);

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#top-header").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

// Handle Sounds
function playSound(key) {
  var sound = new Audio("./sounds/" + key + ".mp3");
  sound.play();
}

// Animate Button Presses
function animatePress(key) {
  var keyColor = $("#" + key);
  keyColor.addClass("pressed");
  setTimeout(function () {
    keyColor.removeClass("pressed");
  }, 100);
}

// Start the Game and Handle Next Sequence
function nextSequence() {
  userClickColor = [];
  gameLevel++;
  $("#top-header").text("Level " + gameLevel);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomGameColor = buttonColors[randomNumber];
  gameChosenColor.push(randomGameColor);

  $("#" + randomGameColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomGameColor);
}

function startOver() {
  //   $("#top-header").text("Game Over").addClass("game-over");
  gameLevel = 0;
  gameChosenColor = [];
  gameStart = false;
}
