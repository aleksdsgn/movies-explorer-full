import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';
import { SHORTS_DURATION } from '../../utils/constants';

function SavedMovies() {
  // состояние исходных фильмов
  const [sourceMovies, setSourceMovies] = useState([]);
  // состояние отфильтрованных фильмов
  const [filteredMovies, setFilteredMovies] = useState([]);
  // состояние показа прелоудера
  const [isShowPreloader, setIsShowPreloader] = useState(false);
  // состояние выполненого поиска
  const [searchWasDone, setSearchWasDone] = useState(false);
  // показ захардкоженного текста ошибки от сервера
  const [apiHasError, setApiHasError] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    mainApi.setToken(jwt);
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies') || '[]');
    if (savedMovies.length === 0) {
      setIsShowPreloader(true);
      mainApi.getSavedMovies()
        .then((serverMovies) => {
          localStorage.setItem('saved-movies', JSON.stringify(serverMovies.data));
          setSourceMovies(serverMovies.data);
          setFilteredMovies(serverMovies.data);
          setIsShowPreloader(false);
        })
        .catch((err) => {
          console.error(err);
          setApiHasError(true);
        });
    } else {
      setSourceMovies(savedMovies);
      setFilteredMovies(savedMovies);
    }
  }, []);

  const filterMovies = (search) => {
    setSearchWasDone(true);
    setFilteredMovies(sourceMovies.filter((movie) => {
      const isName = movie.nameRU.toLowerCase().includes(search.name.toLowerCase());
      const isShorts = search.isShorts ? movie.duration <= SHORTS_DURATION : true;
      return isName && isShorts;
    }));
  };

  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setFilteredMovies((savedMovies) => {
          const localMovies = JSON.parse(localStorage.getItem('local-movies') || '[]');
          const updatedLocalMovies = localMovies.map((localMovie) => {
            if (localMovie.id === movie.movieId) {
              localMovie.saved = false;
            }
            return localMovie;
          });
          localStorage.setItem('local-movies', JSON.stringify(updatedLocalMovies));
          const filteredSavedMovies = savedMovies.filter((savedMovie) => savedMovie._id !== movie._id);
          localStorage.setItem('saved-movies', JSON.stringify(filteredSavedMovies));
          return filteredSavedMovies;
        });
      })
      .catch((err) => {
        console.error(err);
        setApiHasError(true);
      });
  };

  return (
    <main>
      <SearchForm
        filterMovies={filterMovies}
        required={false}
        page="saved-movies"
      />

      {isShowPreloader
        && (
        <div className="movies__preloader-container">
          <Preloader />
        </div>
        )}

      <MoviesCardList
        cards={filteredMovies}
        onClickUpdateMovie={handleDeleteMovie}
        searchWasDone={searchWasDone}
        apiHasError={apiHasError}
      />
    </main>
  );
}

export default SavedMovies;
