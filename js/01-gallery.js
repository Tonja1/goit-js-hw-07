import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryListOfImagesEl = document.querySelector('.gallery');
const imageItemsMarkup = createImageMarkup(galleryItems);

galeryListOfImagesEl.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
}

  function createImageMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
      src="${preview}" data-sourse="${original}" alt="${description}"/></a></div>`)
      .join("");
  }
galeryListOfImagesEl.innerHTML = imageItemsMarkup;

galeryListOfImagesEl.addEventListener(click, oneImgClick);
function oneImgClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

const bigImg = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
bigImg.show();
console.log(galleryItems);

