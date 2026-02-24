//Event driven code to handle button interactions
//imperative programming style
//callbacks

//Modularization using ES6 modules
//named imports
import Timer from "./timer.js";
//default import
import Sound from "./sounds.js";
import Controls from "./controls.js";
import {
  minutesDisplay,
  secondsDisplay,
  buttonSet,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoudOn,
  buttonSoudOff,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  sound.pressButton();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold();
  sound.pressButton();
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
  sound.pressButton();
});

buttonSoudOn.addEventListener("click", function () {
  buttonSoudOn.classList.add("hide");
  buttonSoudOff.classList.remove("hide");
  sound.bgAudio.play();
});

buttonSoudOff.addEventListener("click", function () {
  buttonSoudOn.classList.remove("hide");
  buttonSoudOff.classList.add("hide");
  sound.bgAudio.pause();
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});

// Additional functionality for the timer can be added here
