import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../styles/styles.module.css'

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id} image={image} onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};


export default ImageGallery;
















