import React from 'react';
import s from '../styles/styles.module.css'

const ImageGalleryItem = ({ image, onItemClick }) => {
  return (
    <li className={s.image_gallery_item}>
      <img className={s.image_gallery_item_image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onItemClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;














