// function openImage(event) {
//     const imageSource = event.target.src;

//     const gallery = document.getElementById('gallery');
//     gallery.hidden = true;

//     const galleryImage = document.getElementById('gallery-image');


//     let text = document.createElement('p');
//     galleryImage.appendChild(text);
//     text.innerText = "";
//     console.log(galleryImage)
//     let image = document.createElement('img');
//     image.src = imageSource;
//     galleryImage.appendChild(image);
//     galleryImage.hidden = false;

// };



// function closeImage() {
//     const gallery = document.getElementById('gallery');
//     gallery.hidden = false;

//     const galleryImage = document.getElementById('gallery-image');
//     galleryImage.hidden = true;
// };

// function addImageClickListener() {
//     const galleryElements = document.getElementsByClassName('gallery-img');
//     if (galleryElements && galleryElements.length > 0) {
//         const galleryElement = galleryElements[0];
//         galleryElement.addEventListener('click', openImage);

//     }
// }