import { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ onFilter, searchQuery, onResetInput }) {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const isChecked = JSON.parse(localStorage.getItem("filterCheckBox"));
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(isChecked);

  useEffect(() => {
    if (searchQuery.searchText) {
      setSearchText(searchQuery.searchText);
    }
  }, [searchQuery.searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const checkFilterBox = () => {
    if (searchText !== "") {
      setIsShortFilmChecked(!isShortFilmChecked);

      onFilter({
        searchText: searchText,
        isShortFilmChecked: !isShortFilmChecked,
      });
    } else {
      setIsShortFilmChecked(!isShortFilmChecked);

      onFilter({
        searchText: searchQuery.searchText,
        isShortFilmChecked: !isShortFilmChecked,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText) {
      setError("Нужно ввести ключевое слово");
      return;
    } else {
      onFilter({ searchText, isShortFilmChecked });
    }
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__form-input"
          name="search"
          value={searchText || ""}
          placeholder="Фильм"
          min="1"
          onChange={handleChange}
        />
        {searchText && (
          <button
            className="search-form__reset-button"
            type="button"
            onClick={() => {
              onResetInput();
              setSearchText("");
            }}
          >
            Сброс
          </button>
        )}

        <span className={`search-form__input-error`}>
          {!searchText && error}
        </span>
        <button type="submit" className="search__form-button">
          Поиск
        </button>
      </form>
      <FilterCheckbox
        isChecked={searchQuery.isShortFilmChecked}
        onCheck={checkFilterBox}
      />
    </div>
  );
}
