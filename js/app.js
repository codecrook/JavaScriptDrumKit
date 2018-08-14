(function() {
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
    window.addEventListener('keydown', playSound);
    
    /**
     *Plays sound when key is pressed
     *Adds class to the element
    **/
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;
        
        key.classList.add('playing');
        
        audio.currentTime = 0;
        audio.play();
  }
    
    /**
     *Removes the 'playing' class from the element when transition is completed
    **/
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }
})();