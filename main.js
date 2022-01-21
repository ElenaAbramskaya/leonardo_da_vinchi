const form = document.getElementsByClassName('form');
let username = document.getElementById('author-name');
let surname = document.getElementById('author-surname');
let text = document.getElementById('text');
let email = document.getElementById('author-email');
let message = document.getElementById('message-1');
let user = document.getElementById('author');
let author_text = document.getElementById('author-text');
const btn = document.getElementById('form-btn');



function showText() {



    alert("Ваш отзыв принят");

    user.innerText = `${username.value} ${surname.value}`;
    author_text.innerText = text.value;
    username.value = "";
    surname.value = "";
    text.value = "";
    email.value = "";
};
btn.addEventListener('click', showText);