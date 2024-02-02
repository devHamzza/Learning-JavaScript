// ---------- Chapter no 8 Practice Set -------- //

// Answer No 01 
document.getElementById('google').addEventListener('click', function (google) {
    window.location = 'https://www.google.com';
    window.focus;
})

document.getElementById('twitter').addEventListener('click', function (twitter) {
    window.location = 'https://www.twitter.com';
    window.focus;
})

document.getElementById('facebook').addEventListener('click', function (facebook) {
    window.location = 'https://www.facebook.com';
    window.focus;
})

function bulbon() {
    let a = document.getElementById('bulb');
    a.classList.remove("fa-solid");
    a.classList.toggle("fa-regular");
}


// setInterval(bulbon, 300);

const func1 = () => {
    let a = document.getElementById('bars');
    // a.classList.remove("fa-bars");
    a.classList.toggle("fa-xmark");
}