function keyPressedDown(eventObj) {
    if(eventObj.key === 'c') {
        document.querySelector('#c').style.backgroundColor = 'cyan';
    }
    if(eventObj.key === 'd') {
        document.querySelector('#d').style.backgroundColor = 'cyan';
    }
    if(eventObj.key === 'r') {
        document.querySelector('#d-sharp').style.backgroundColor = 'cyan';
    }
    if(eventObj.key === 'e') {
        document.querySelector('#e').style.backgroundColor = 'cyan';
    }
}
function keyPressedUp(eventObj) {
    if(eventObj.key === 'c') {
        document.querySelector('#c').style.backgroundColor = '';
    }
    if(eventObj.key === 'd') {
        document.querySelector('#d').style.backgroundColor = '';
    }
    if(eventObj.key === 'r') {
        document.querySelector('#d-sharp').style.backgroundColor = '';
    }
    if(eventObj.key === 'e') {
        document.querySelector('#e').style.backgroundColor = '';
    }
}

window.addEventListener('keydown', keyPressedDown);
window.addEventListener('keyup', keyPressedUp);