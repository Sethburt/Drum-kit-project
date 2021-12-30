for (var numberOfDrumButtons = document.querySelectorAll(".drum").length, i = 0; i < numberOfDrumButtons; i++) document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var e = this.innerHTML;
  makeSound(e), buttonAnimation(e)
});

function makeSound(e) {
  switch (e) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/bass.mp3").play()
  }
}

function buttonAnimation(e) {
  var n = document.querySelector("." + e);
  n.classList.add("pressed"), setTimeout(function() {
    n.classList.remove("pressed")
  }, 100)
}
document.addEventListener("keydown", function(e) {
  makeSound(e.key), buttonAnimation(e.key)
});
