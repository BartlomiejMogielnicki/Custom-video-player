const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');


// Update play/pause icon
const updatePlayIcon = () => {
    if (video.paused) {
        playBtn.innerHTML = `<i class="far fa-play-circle fa-2x"></i>`
    } else {
        playBtn.innerHTML = `<i class="far fa-pause-circle fa-2x"></i>`
    }
}

// Play/pause video
const togglePlayPause = () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    updatePlayIcon();
}

// Stop video
const stopVideo = () => {
    video.pause();
    video.currentTime = 0;
    updatePlayIcon();
}

// Update progress bar
const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;
}

// Change progress bar
const changeProgress = () => {
    video.currentTime = (progress.value * video.duration) / 100;
}


// Time update
const timeUpdate = () => {

    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime);

    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    if (seconds < 10) {
        seconds = '0' + seconds;
    };

    time.textContent = `${minutes}:${seconds}`
    updateProgress();
}

video.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', timeUpdate);
playBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', changeProgress);