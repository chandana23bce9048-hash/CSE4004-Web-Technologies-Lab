// Helper function to format seconds into M:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// 1. Elements
const audio = document.getElementById('myAudio');
const video = document.getElementById('myVideo');
const audioTimeDisplay = document.getElementById('audioTime');
const videoTimeDisplay = document.getElementById('videoTime');

// 2. Update Audio Time
audio.addEventListener('timeupdate', () => {
    audioTimeDisplay.textContent = formatTime(audio.currentTime);
});

// 3. Update Video Time
video.addEventListener('timeupdate', () => {
    videoTimeDisplay.textContent = formatTime(video.currentTime);
});
