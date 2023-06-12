import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.js'
import css from '../ImageGallery/ImageGallery.module.css'


export const ImageGallery = ({ images }) => (
  <ul className={css.ImageGallery}>
    <ImageGalleryItem images = {images} />
  </ul>
);

