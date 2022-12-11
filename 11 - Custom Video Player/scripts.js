/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const volume = player.querySelector('input[name="volume"]')
const speed = player.querySelector('input[name="playbackRate"]')
const zoomBtn = document.querySelector('.zoom')
const body = document.querySelector('body')
/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

 function skip() {
    // Get the value of the data-skip attribute
    const skipTime = this.dataset.skip;
    // Convert the value to a number
    const time = parseFloat(skipTime);
    // Update the current time of the video
    video.currentTime += time;
}

  function updateProgress() {
    // Calculate the progress as a percentage of the video duration
    const progressPercent = (video.currentTime / video.duration) * 100;
    // Update the width of the progress bar
    progressBar.style.flexBasis = `${progressPercent}%`;
  }
  
  function updateVolume() {
    // Get the value of the volume input range
    const volume = this.value;
    // Update the volume of the video
    video.volume = volume;
  }
  function updateSpeed() {
    // Get the value of the speed input range
    const speed = this.value;
    // Update the playback rate of the video
    video.playbackRate = speed;
  }
  function toggleZoom(){
    console.log("suu");
    player.classList.toggle('zoomIn')
  }
zoomBtn.addEventListener('click',toggleZoom)

toggle.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
volume.addEventListener('input', updateVolume);
speed.addEventListener('input', updateSpeed);

setInterval(updateProgress, 100);

skipButtons.forEach(button => button.addEventListener('click',skip))

