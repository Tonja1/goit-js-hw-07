import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector('.gallery');

galleryImages.addEventListener('click', (evt) => {
  evt.preventDefault();
if (evt.target.nodeName !== "IMG") {
  return;
}
const bigImg = basicLightbox.create(`<img src="${evt.target.dataset.sourse}" width="800" height="600">`);
  bigImg.show();

});

const imageItemsMarkup = createImageMarkup(galleryItems);
galleryImages.innerHTML = imageItemsMarkup;

  function createImageMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image"
      src="${preview}" data-sourse="${original}" alt="${description}"/></a></div>`)
      .join("");
};
console.log(galleryItems);

