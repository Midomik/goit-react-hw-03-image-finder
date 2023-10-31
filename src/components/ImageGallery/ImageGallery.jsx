import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ data, openModal }) => {
  return (
    <ul className={css.image_gallery}>
      {data !== null &&
        data.map(item => {
          const { id, webformatURL, tags, largeImageURL } = item;
          return (
            <ImageGalleryItem
              key={id}
              url={webformatURL}
              description={tags}
              largeImageURL={largeImageURL}
              openModal={openModal}
            />
          );
        })}
    </ul>
  );
};
