window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key'));

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    
}
