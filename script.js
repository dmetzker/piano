const keyMap = {
    'c': '#c',
    'd': '#d',
    'r': '#d-sharp',
    'e': '#e',
    'd-sharp': '#d-sharp',
}


function keyPressedDown(eventObj) {
     const id = keyMap[eventObj.key];
    if (id) {
        document.querySelector(id).style.backgroundColor = 'cyan';
    }
}

function keyPressedUp(eventObj) {
    const id = keyMap[eventObj.key];
    if (id) {
        document.querySelector(id).style.backgroundColor = '';
    }
}

function mouseClickDown(eventObj) {
    const id = keyMap[eventObj.target.id];
    const pianoContainer = document.querySelector('.keyboard');
    if (id) {
        pianoContainer.querySelector(id).style.backgroundColor = 'cyan';
    }
}

function mouseClickUp(eventObj) {
    const id = keyMap[eventObj.target.id];
    const pianoContainer = document.querySelector('.keyboard');
     if (id) {
        pianoContainer.querySelector(id).style.backgroundColor = '';
    }
}

document.addEventListener('keydown', keyPressedDown);
document.addEventListener('keyup', keyPressedUp);
document.addEventListener('mousedown', mouseClickDown);
document.addEventListener('mouseup', mouseClickUp);
