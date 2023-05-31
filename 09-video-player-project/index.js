// =================== 09 Video Player Project ================== //

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

const playPause = () => {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
};

const stopVideo = () => {
	video.currentTime = 0;
	video.pause();
};

const updateIcon = () => {
	if (video.paused) {
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
};

const updateProgress = () => {
	progress.value = (video.currentTime / video.duration) * 100;

	// Get minutes
	let minutes = Math.floor(video.currentTime / 60);
	minutes = minutes < 10 ? '0' + String(minutes) : minutes;

	// Get seconds
	let seconds = Math.floor(video.currentTime % 60);
	seconds = seconds < 10 ? '0' + String(seconds) : seconds;

	timestamp.textContent = `${minutes}:${seconds}`;
};

const setProgress = () => {
	video.currentTime = (+progress.value * video.duration) / 100;
};

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress);
