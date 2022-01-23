/*gallery*/
let gallery = document.getElementById('gallery-title');
const img = document.getElementById('gall-img');
const second_img = document.getElementById('img-2');
const third_img = document.getElementById('img-3');
const fourth_img = document.getElementById('img-4');
const fifth_img = document.getElementById('img-5');
const sixth_img = document.getElementById('img-6');
const seventh_img = document.getElementById('img-7');
const eigth_img = document.getElementById('img-8');
const ninth_img = document.getElementById('img-9');
const tenth_img = document.getElementById('img-10');
const eleventh_img = document.getElementById('img-11');
let paint = document.getElementById('painting-description');



function closePainting() {
    let back = document.createElement('img');
    back.src = "img/back.jpg";
    paint.appendChild(back);
    back.style.marginBottom = "20px";
    back.style.marginRight = "20px";
    back.addEventListener('click', function() {

        gallery.hidden = false;

        paint.innerText = "";



    });
};




img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();

    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-2.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";

    let text = document.createElement('p');
    paint.appendChild(text);

    let description = document.createElement('p');

    paint.appendChild(description);
    text.innerText = "Богоматерь с младенцем";

    description.innerText = "Эта картина относится к позднему периоду творчества Леонардо. Ее дом сейчас находится в большой галерее Лувра. Да Винчи использовал непопулярный в то время сюжет для Италии под названием «Анна-трио». Святая Мария, сидящая на коленях у матери, держит на руках Младенца Иисуса. Леонардо сделал множество зарисовок к этой истории, но так и не завершил работу. Саму картину мастер писал приблизительно десять лет, но многие детали в ней так и остались незавершенными."
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";

    img1.style.width = "400px";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";

    description.style.width = "400px";
    description.style.fontWeight = "bold";
    description.style.color = "#7e8dc6";



});
second_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-3.jpg";
    img1.style.borderRadius = "7px";
    paint.appendChild(img1);

    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Мадонна Литта";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина написанная талантливым да Винчи в начале 90-х 15-го столетия. Размер картины составляет 42х33 см. Материалы - дерево и темпера. «Мадонна Лита» ярко отображает элементы нового искусства эпохи Высокого Возрождения. Полотно хранится в галерее Эрмитажа в городе Санкт - Петербург."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";

});
third_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-8.jpg";
    img1.style.borderRadius = "7px";
    paint.appendChild(img1);

    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "350px";
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Мадонна в скалах";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Произведение выдающегося Леонардо, помимо многочисленных рисунков, существует в двух вариантах. Одна из картин (1483—1486) находится в музее Лувра в Париже. Второе полотно, которое написано позже, в период 1499—1506 годов, обитает в Лондонской галерее. Основой для композиции картины послужил малоизвестный сюжет из текста «Жизнь Иоанна по Серапиону».";
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";

});
fourth_img.addEventListener('click', function() {
    gallery.hidden = true;

    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-5.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Мадонна Бенуа или Мадонна с цветком";
    text.style.fontSize = "20px";
    text.style.width = "220px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Эта картина считается одной из первых и незавершенных работ Леонардо. В 1914 году ее приобрел в свою коллекцию Императорский Эрмитаж. Картину галерее продала жена придворного архитектора Бенуа - Мария Александровна. В работе над этим произведением, художником была использована техника масляной живописи."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";

});
fifth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-6.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Дама с горностаем";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина была написана в 1489–1490 годы. Многие искусствоведы склонны утверждать, что на полотне изображена любовница Лодовико Сфорца. Женщину звали Чечилия Галлерани. Размеры картины 54 × 40 см. В настоящее время картина обитает в Национальном музее Кракова."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});
sixth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-7.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Мона Лиза";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Одна из самых известных и загадочных картин величайшего Леонардо да Винчи. Предположительно картина, написана в 1503 -1505 годы. Сейчас картина находиться в Лувре. По мнению искусствоведов, на картине мы видим жену продавца шёлка - Франческо дель Джокондо из Флоренции."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});
seventh_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();

    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-1.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Портрет Джиневры де Бенчи";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Одна из ранних картин да Винчи. Картина была написана примерно в 1474—1476 годы. Полотно можно назвать примером флорентийской портретной живописи Раннего Возрождения. Это портрет женщины, флорентийской поэтессы 15 века - Джиневры д’Америго де Бенчи. Поэтесса была платонической любовью Бернардо Бембо, Он вероятнее и заказал этот портрет у мастера."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});
eigth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-4.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Иоанн Креститель";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина относиться к познему этапу искуства Леонардо да Винчи. Полотно было написано в 1514-1516 годы. Подбор темного фона и композиции характеризуют произведение, как яркий пример живописи эпохи Возрождения. По центру мы видим портрет святого - Иоанна Крестителя."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});
ninth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-9.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Прекрасная Ферроньера";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "На картине изображен портрет неизвестной женщины. Вероятно этой женщиной является миланская дама - Лукреция Кривелли, любимица герцога Лодовико Моро. Другие же считают, что этой дамой могла быть жена Моро - Беатриче д'Эсте. Картина находится в Лувре. Произведение было написано в 1490 году. Авторство этой картины, кроме Леонардо, приписывают разным ученикам да Винчи."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});
tenth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-10.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Мадонна с гвоздикой";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина была создана в молодые годы Леонардо, когда он был учеником Верроккьо. На переднем плане изображена Святая Мария и младенец Иисус. Мария олицетворяет спокойствие и мудрость. В отличие от спокойной Мадонны, младенец находится в энергичном движении. Малыш пытается схватить красную гвоздику, которую его мать держит в изящной руке."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});
eleventh_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-12.jpg";
    paint.appendChild(img1);
    img1.style.borderRadius = "7px";
    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Портрет музыканта";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    text.style.color = "#876d89";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Одна из незаконченных работ художника. Сильно переписана в позднее время. Полотно хранится в миланской Пинакотеке Амброзиана. Произведение начато художником в конце 90-х годов 15 века. В 19 столетии считалось, что на портрете изображен миланский герцог Лодовико Моро."
    description.style.width = "400px";
    description.style.color = "#7e8dc6";
    description.style.fontWeight = "bold";
});







/*feedback-page */

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