function show() {
    document.querySelector('.popup').innerText = "hi";

    document.querySelector('.popup').style.top='20px';

    setTimeout(hide , 3000);
}

function hide() {
    document.querySelector('.popup').style.top='-50px';
}