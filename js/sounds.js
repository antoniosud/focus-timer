export default function () {
  const buttonPressAudio = new Audio("./audios/f1-radio.mp3");
  const kitchenTimer = new Audio("./audios/kitchen-timer.mp3");
  const bgAudio = new Audio("./audios/bg-audio.mp3");

  bgAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timerEnd() {
    kitchenTimer.play();
  }

  return {
    pressButton,
    timerEnd,
    bgAudio,
  };
}
