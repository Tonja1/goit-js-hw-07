import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryListOfImagesEl = document.querySelector('.gallery')
 const imageItemsMarkup = createImageMarkup(galleryItems)
const url = returnUrlOfBiggestImg

function returnUrlOfBiggestImg(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return 
    }
  const bigImg = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
  `)
}
galeryListOfImagesEl.addEventListener('click', returnUrlOfBiggestImg)
galeryListOfImagesEl.addEventListener('click', () => {
bigImg.show()
})
  function createImageMarkup(items) {
      return items.map( item =>
      `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-sourse="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `).join("")
  }
galeryListOfImagesEl.innerHTML = imageItemsMarkup;

console.log(galleryItems);

