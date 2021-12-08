/*const img1 = document.getElementsByClassName('img-1');
const img2 = document.getElementsByClassName('img-2');
const img3 = document.getElementsByClassName('img-3');
const img4 = document.getElementsByClassName('img-4');
const img5 = document.getElementsByClassName('img-5');
const img6 = document.getElementsByClassName('img-6');
const img7 = document.getElementsByClassName('img-7');
const img8 = document.getElementsByClassName('img-8');
const img9 = document.getElementsByClassName('img-9');
const img10 = document.getElementsByClassName('img-10');
const img11 = document.getElementsByClassName('img-11');

const paint = document.getElementsByClassName('painting-image');
const paint2 = document.getElementsByClassName('painting-image2');
const paint3 = document.getElementsByClassName('painting-image3');
const paint4 = document.getElementsByClassName('painting-image4');
const paint5 = document.getElementsByClassName('painting-image5');
const paint6 = document.getElementsByClassName('painting-image6');
const paint7 = document.getElementsByClassName('painting-image7');
const paint8 = document.getElementsByClassName('painting-image8');
const paint9 = document.getElementsByClassName('painting-image9');
const paint10 = document.getElementsByClassName('painting-image10');
const paint11 = document.getElementsByClassName('painting-image11');

const paint_title = document.getElementsByClassName('painting-image-title');
const paint_title2 = document.getElementsByClassName('painting-image-title2');
const paint_title3 = document.getElementsByClassName('painting-image-title3');
const paint_title4 = document.getElementsByClassName('painting-image-title4');
const paint_title5 = document.getElementsByClassName('painting-image-title5');
const paint_title6 = document.getElementsByClassName('painting-image-title6');
const paint_title7 = document.getElementsByClassName('painting-image-title7');
const paint_title8 = document.getElementsByClassName('painting-image-title8');
const paint_title9 = document.getElementsByClassName('painting-image-title9');
const paint_title10 = document.getElementsByClassName('painting-image-title10');
const paint_title11 = document.getElementsByClassName('painting-image-title11'); */
// let img1 = document.getElementsByClassName('img-1');

// img1.onclick = function changePicture() {

//     let paint = document.getElementsByClassName('painting-image');

//     return paint.innerHTML = img1;
// };

function openImage(event) {
    const imageSource = event.target.src;
    console.log(imageSource);

    // window.location.href = "product.html";

    // let first_img = document.getElementsByClassName('gall-img');

    // let image = document.createElement('img');
    // pic.src = "img/gallery-img-2.jpg";
    // first_img.appendChild(image);
};

function addImageClickListener() {
    const galleryElements = document.getElementsByClassName('gallery-img');
    if (galleryElements && galleryElements.length > 0) {
        const galleryElement = galleryElements[0];
        galleryElement.addEventListener('click', openImage);
    }
}