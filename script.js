document.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.piano-ele[data-key="${event.keyCode}"]`);
  
  if (!audio) return; 

  audio.currentTime = 0; 
  audio.play();
  key.classList.add('play');
});

document.addEventListener('keyup', function(event) {
  const key = document.querySelector(`.piano-ele[data-key="${event.keyCode}"]`);
  if (key) {
      key.classList.remove('play');
  }
});