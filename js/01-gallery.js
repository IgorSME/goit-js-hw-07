import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery")
galleryEl.addEventListener("click", onGetLargeImage)


const galleryMarkup = createGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}

function onGetLargeImage(e) {
    e.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => {
        document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            instance.close()
        }
    })
    }
});

    instance.show();
    
}




