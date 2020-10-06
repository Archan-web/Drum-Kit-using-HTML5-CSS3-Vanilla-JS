window.addEventListener('keydown',function(e){
    var audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);
    audio.currentTime=0;
    audio.play();
})