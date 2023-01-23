import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector('.gallery');

galleryImages.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
};

const imageItemsMarkup = createImageMarkup(galleryItems);
galleryImages.innerHTML = imageItemsMarkup;

  function createImageMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
      src="${preview}" data-sourse="${original}" alt="${description}"/></a></div>`)
      .join("");
};
  
const bigImg = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
bigImg.show();
console.log(galleryItems);

