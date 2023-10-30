import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  url,
  description,
  largeImageURL,
  openModal,
}) => {
  return (
    <li
      onClick={() => openModal({ largeImageURL, description })}
      className={css.image_gallery_item}
    >
      <img
        className={css.image_gallery_item_image}
        src={url}
        alt={description}
      />
    </li>
  );
};
