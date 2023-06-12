import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ images }) => (
  <>
   {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li className={css.ImageGalleryItem} key={id}>
        <a href={largeImageURL}>
          <img className={css.ImageGalleryItem_image} 
            src={webformatURL}
            alt={tags}
            /></a>
      </li>
    ))}

  </>
   
);
