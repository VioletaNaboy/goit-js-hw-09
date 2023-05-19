// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const elAllGallery = document.querySelector('.gallery');
const elGallery = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');
elAllGallery.insertAdjacentHTML('afterbegin', elGallery);
const gallery = new SimpleLightbox('.gallery .gallery__link', {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});
