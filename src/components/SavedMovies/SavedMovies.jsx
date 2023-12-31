import { useState, useEffect } from "react";
import "./SavedMovies.css";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem("searchedSavedMovies");
  const queries = localStorage.getItem("searchQuerySavedMovies");
  const [searchQuery, setSearchQuery] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [searchedMovies, savedMovies, searchQuery]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    } else {
      setSearchQuery({ ...queries, searchText: "" });
    }
  }, [queries, savedMovies]);

  const filterMovies = (query) => {
    localStorage.setItem("searchQuerySavedMovies", JSON.stringify(query));

    let filtered = [];
    if (query.isShortFilmChecked) {
      filtered = savedMovies.filter((m) => {
        return (
          m.duration <= 40 &&
          m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
        );
      });
      setFilteredMovies(filtered);
      localStorage.setItem("searchedSavedMovies", JSON.stringify(filtered));
    } else if (!query.isShortFilmChecked) {
      filtered = savedMovies.filter((m) => {
        return m.nameRU
          .toLowerCase()
          .trim()
          .includes(query.searchText.toLowerCase());
      });
      setFilteredMovies(filtered);
      localStorage.setItem("searchedSavedMovies", JSON.stringify(filtered));
    }
  };

  const handleResetInput = () => {
    setFilteredMovies(savedMovies);
    setSearchQuery({});
    localStorage.removeItem("searchedSavedMovies");
    localStorage.removeItem("searchQuerySavedMovies");
  };

  return (
    <section className="savedMovies">
      <SearchForm
        onFilter={filterMovies}
        searchQuery={searchQuery}
        onResetInput={handleResetInput}
      />
      {filteredMovies.length ? (
        <MoviesCardList movies={filteredMovies} onDeleteMovie={onDeleteMovie} mini={true}/>
      ) : (
        searchedMovies && (
          <p className="movies__not-found">
            По вашему запросу ничего не найдено
          </p>
        )
      )}
    </section>
  );
}
