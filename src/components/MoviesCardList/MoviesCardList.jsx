import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useResize from "../../hooks/useResize.js";
import {WIDTH_1280, WIDTH_780, COL_2, COL_3, COL_5, COL_8, COL_12} from "../../utils/constants";

const MoviesCardList = ({
  movies,
  savedMovies,
  onLikeMovie,
  onDeleteMovie,
  mini
}) => {
  let size = useResize();
  const [moviesToAdd, setMoviesToAdd] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMoviesToAdd(0);
  }, [movies]);

  const moviesToRender = useMemo(() => {
    const countToRender = size.width < WIDTH_780 ? COL_5 : size.width < WIDTH_1280 ? COL_8 : COL_12;

    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, size]);

  return (
    <>
      <ul className="movies-cardlist">
        {moviesToRender.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onLikeMovie={onLikeMovie}
              onDeleteMovie={onDeleteMovie}
              mini={mini}
            />
          );
        })}
      </ul>
      {location.pathname === "/movies" &&
        movies.length > moviesToRender.length && (
          <button
            onClick={() => {
              setMoviesToAdd((prev) => prev + (size.width >= WIDTH_1280 ? COL_3 : COL_2));
            }}
            className="movies__more-btn"
          >
            Еще
          </button>
        )}
    </>
  );
};

export default MoviesCardList;
