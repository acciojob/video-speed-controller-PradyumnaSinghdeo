// Select elements
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackRateSlider = document.querySelector('input[name="playbackRate"]');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fastForward');

// Functions to handle functionalities
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function changeVolume() {
  video.volume = volumeSlider.value;
}

function changePlaybackRate() {
  video.playbackRate = playbackRateSlider.value;
}

function skip(time) {
  video.currentTime += time;
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', changeVolume);
playbackRateSlider.addEventListener('input', changePlaybackRate);

rewindButton.addEventListener('click', () => skip(-10));
fastForwardButton.addEventListener('click', () => skip(25));

// Allow clicking on progress bar to seek
progress.addEventListener('click', (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
});
