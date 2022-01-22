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
    back.style.marginTop = 0;
    back.addEventListener('click', function() {
        gallery.hidden = false;
        paint.style.display = "none";
        paint.innerText = "";

    });
};




img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();

    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-2.jpg";
    paint.appendChild(img1);

    let text = document.createElement('p');
    paint.appendChild(text);

    let description = document.createElement('p');
    paint.appendChild(description);
    text.innerText = "Богоматерь с младенцем";

    description.innerHTML = "Принадлежит к позднему периоду его творчества. Выставлена в Большой галерее Лувра. Леонардо да Винчи использовал мало распространённый в Италии сюжет, известный как «Анна-втроём», когда Мария сидит на коленях у своей матери Анны и держит на руках младенца Иисуса.";

    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";

    img1.style.width = "400px";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    description.style.width = "400px";

});
second_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-3.jpg";
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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина традиционно атрибутируемая как произведение выдающегося итальянского художника и учёного Высокого Возрождения Леонардо да Винчи, приблизительно датируемая периодом 1481—1495 годов. Хранится в собрании Эрмитажа в Санкт-Петербурге."
    description.style.width = "400px";

});
third_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-8.jpg";

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Произведение выдающегося художника итальянского Возрождения Леонардо да Винчи, существующее, помимо множества подготовительных рисунков и этюдов, в двух основных вариантах. Одна картина (1483—1486) хранится в музее Лувр в Париже, вторая, написанная позднее, в период 1499—1506 годов, в — Лондонской национальной галерее.";
    description.style.width = "400px";


});
fourth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-5.jpg";
    paint.appendChild(img1);

    paint.style.display = "flex";
    paint.style.flexDirection = "column";
    paint.style.alignItems = "center";
    img1.style.width = "400px";
    paint.appendChild(img1);
    let text = document.createElement('p');
    paint.appendChild(text);
    text.innerText = "Мадонна Бенуа или Мадонна с цветком";
    text.style.fontSize = "20px";
    text.style.fontWeight = "bold";
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Ранняя картина Леонардо да Винчи, предположительно оставшаяся незавершённой. В 1914 году она была приобретена Императорским Эрмитажем у Марии Александровны, жены придворного архитектора Леонтия Николаевича Бенуа."
    description.style.width = "400px";

});
fifth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-6.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина, как считается, принадлежащая кисти Леонардо да Винчи. По мнению многих исследователей, это портрет Чечилии Галлерани — любовницы Лодовико Сфорца по прозванию Иль Моро, герцога Миланского, что находит подтверждение в сложной символике картины."
    description.style.width = "400px";

});
sixth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-7.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина Леонардо да Винчи, одно из самых известных произведений живописи. Точная дата написания неизвестна (по некоторым сведениям, написана между 1503 и 1505 годами). Ныне хранится в Лувре. Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо."
    description.style.width = "400px";

});
seventh_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();

    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-1.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Ранняя картина Леонардо да Винчи, написанная около 1474—1476 годов, образец флорентийской портретной живописи позднего кватроченто (эпохи Раннего Возрождения). Это женский портрет, на котором, как выяснили в XX веке, изображена Джиневра д’Америго де Бенчи, флорентийская поэтесса и интеллектуалка XV века, платоническая возлюбленная венецианца Бернардо Бембо, который, скорее всего, и заказал этот портрет художнику."
    description.style.width = "400px";

});
eigth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-4.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Это произведение относится к позднему периоду творчества художника.лухой фон, лишенный пейзажа, столь характерного для работ эпохи Возрождения.Изображение святого снабжено традиционной атрибутикой: тонкий тростниковый крест, длинные волосы, одежды из шерсти. Пересечение диагоналей корпуса тела и правой руки усиливает мотив креста, который едва заметно написан художником."
    description.style.width = "400px";

});
ninth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-9.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Портрет неизвестной миланской дамы (предположительно Лукреции Кривелли, фаворитки герцога Лодовико Моро, либо же его жены Беатриче д'Эсте), считающийся работой Леонардо да Винчи. Картина выставлена в Лувре.Около 1490 года сам Леонардо да Винчи — либо же его ученик Бернардино деи Конти (по предположению Беренсона); либо Больтраффио (по мнению Герберта Кука); а может Франческо Мельци — возможно, при участии учителя, написал данный портрет маслом на дереве. Иногда картину называют «Портретом незнакомки»"
    description.style.width = "400px";

});
tenth_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-10.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "Картина, которую многие искусствоведы приписывают молодому Леонардо да Винчи. Предположительно, создана Леонардо в бытность его учеником в мастерской Верроккьо. Над сложным многообразием одеяния, которое цветовой гаммой сочетается с причудливой горной цепью на заднем плане, возвышается благородно поднятая глава Марии. Никакое чувство не проникает наружу, нарушая совершенные черты лица, только небольшое подобие улыбки играет на губах. В противоположность спокойной Мадонне, младенец Иисус изображен в энергичном движении. Он буквально дрожит от возбуждения, пытаясь схватить красную гвоздику, которую держит в своей грациозной руке его мать. "
    description.style.width = "400px";

});
eleventh_img.addEventListener('click', function() {
    gallery.hidden = true;
    closePainting();
    let img1 = document.createElement('img');
    img1.src = "img/gallery-img-12.jpg";
    paint.appendChild(img1);

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
    let description = document.createElement('p');
    paint.appendChild(description);
    description.innerHTML = "сильно переписанная в позднейшее время и неоконченная картина кисти великого итальянского художника Леонардо да Винчи, хранящаяся в миланской Пинакотеке Амброзиана. Картина начата художником на рубеже 90-х годов XV века. В XIX веке считалось, что портрет изображает миланского герцога Лодовико Моро."
    description.style.width = "400px";

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