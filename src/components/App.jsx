import React, { useEffect, useState } from 'react';
import s from './styles/styles.module.css';
import { fetchImagesWithQuery } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { Loader } from './Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDefaultPage, setIsDefaultPage] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const newImages = await fetchImagesWithQuery(searchQuery, page);
        if (page === 1) {
          setImages(newImages);
          setIsDefaultPage(false);
        } else {
          setImages(prevImages => [...prevImages, ...newImages]);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery, page]);

  const handleSetQuery = query => {
    setImages([]);
    setPage(1);
    setSearchQuery(query);
  };

  const handleLoadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = imageURL => {
    setShowModal(true);
    setLargeImageURL(imageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className={s.app}>
      <Searchbar handleSetQuery={handleSetQuery} />
      {!isDefaultPage && (
        <ImageGallery images={images} onItemClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMoreImages} />
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
















