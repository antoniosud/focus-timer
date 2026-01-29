

//Event driven code to handle button interactions
//imperative programming style
//callbacks

document.querySelector('.play').addEventListener('click', function() {  // Play button functionality
  this.classList.add('hide'); // Hide play button
  document.querySelector('.set').classList.add('hide');
  document.querySelector('.pause').classList.remove('hide'); // Show pause button
  document.querySelector('.stop').classList.remove('hide'); // Show stop button
});

document.querySelector('.pause').addEventListener('click', function() {
  this.classList.add('hide');
  document.querySelector('.play').classList.remove('hide');
});

document.querySelector('.stop').addEventListener('click', function() {
  this.classList.add('hide');
  document.querySelector('.play').classList.remove('hide');
  document.querySelector('.pause').classList.add('hide');
  document.querySelector('.set').classList.remove('hide');
});

document.querySelector('.sound-on').addEventListener('click', function() {
  this.classList.add('hide');
  document.querySelector('.sound-of').classList.remove('hide');
});
document.querySelector('.sound-of').addEventListener('click', function() {
  this.classList.add('hide');
  document.querySelector('.sound-on').classList.remove('hide');
});

// Additional functionality for the timer can be added here
