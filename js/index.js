

//Event driven code to handle button interactions
//imperative programming style
//callbacks

//Modularization using ES6 modules
//named imports
import Timer from './timer.js'
//default import
import Controls from './controls.js'

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const buttonSet = document.querySelector('.set');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSoudOn = document.querySelector('.sound-on');
const buttonSoudOff = document.querySelector('.sound-off');

let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

const controls = Controls(
  {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
  }
)

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls:controls.reset
})

buttonPlay.addEventListener('click', function() {
  controls.play();
  timer.countdown();    
})

buttonPause.addEventListener('click', function() {
    controls.pause();
    clearTimeout(timerTimeOut);   

});

buttonStop.addEventListener('click', function() {
    controls.reset() 
    timer.reset()
});

buttonSoudOn.addEventListener('click', function() {
  buttonSoudOn.classList.add('hide');
  buttonSoudOff.classList.remove('hide');
})

buttonSoudOff.addEventListener('click', function() {
  buttonSoudOn.classList.remove('hide');
  buttonSoudOff.classList.add('hide');
})

buttonSet.addEventListener('click', function() {
 let newMinutes = controls.getMinutes()
 
  if (!newMinutes){
    timer.reset()
    return;
  }

  minutes = newMinutes;
  timer.updateDisplay(minutes, 0)
  
})

// Additional functionality for the timer can be added here
