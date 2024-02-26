import React, { useState } from 'react';
import s from '../styles/styles.module.css';

const Searchbar = ({ handleSetQuery }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchInput = e => {
    setSearchValue(e.target.value);
  };

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    if (searchValue.trim()) {
      handleSetQuery(searchValue.trim());
      setSearchValue('');
    }
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSearchFormSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={handleChangeSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;





