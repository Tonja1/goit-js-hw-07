import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryEl = document.querySelector('.gallery');
function newGellery(image) {
    return image
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
        })
        .join("");
}

galeryEl.insertAdjacentHTML("beforeend", newGellery(gelleryItems));

new Simplelightbox(".gallery a", {
    captiosData: "alt",
    captionsDelay: 250,
});

 console.log(galleryItems);


