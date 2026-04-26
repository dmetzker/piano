function toggleHide(eventObj) {
    if (eventObj.target.matches('h3')) {
        const nextP = eventObj.target.nextElementSibling;
        if (nextP.style.display === 'none') {
            nextP.style.display = 'block';
        } else {
            nextP.style.display = 'none';
        }

    }
}
const el = document.querySelector('#projects');

el.addEventListener('click', toggleHide)