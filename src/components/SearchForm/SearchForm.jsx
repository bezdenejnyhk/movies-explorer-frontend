import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__form-input"
          type="search"
          placeholder="Фильм"
          required
        />

        <button type="submit" className="search__form-button">Поиск</button>
      </form>
      <FilterCheckbox />
    </div>
  );
};