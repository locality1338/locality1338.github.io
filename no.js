let clicked = false

video.hidden = true

window.onbeforeunload = function() {
    if (clicked) return ''
}

but.onclick = function () {
    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
    clicked = true
    video.hidden = false
    but.hidden = true
    video.play();
}

