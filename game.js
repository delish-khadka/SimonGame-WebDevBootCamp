//number of button elements
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//if the game is not started then call this function on button click event
$(document).keydown(function () {
  if (!started) {
    //change h1 text when game is started
    $("#level-title").text("Level " + level);
    nextSequence();
    //change started to true if the game is started
    started = true;
  }
});

//function of playing sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//
function nextSequence() {
  //increase count by 1 when the game is started
  level++;
  //generate random number from 0 - 3
  var randomNumber = Math.floor(Math.random() * 4);
  //use random number to select content of array from buttonColours
  var randomChosenColour = buttonColours[randomNumber];
  //push the color to gamePattern array
  gamePattern.push(randomChosenColour);
  //first flash on the random button
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  console.log(gamePattern);
  console.log(gamePattern.length);
}

//click event on button
$(".btn").click(function () {
  //find the button that was clicked and fetch the id
  var userChosenColour = $(this).attr("id");

  //push the id of the clicked button to userClickedPattern array
  userClickedPattern.push(userChosenColour);

  //pass id of the button as parameter to playSound and animatePress function
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern.length - 1);

  //console.log(userClickedPattern.at(-1));
  console.log(userClickedPattern);
});

//animate button on click
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//compare userclickedpattern array to gamePattern

function checkAnswer(currentLevel) {
  // if (currentLevel === gamePattern.length) {
  //   console.log("success");
  // }
}
