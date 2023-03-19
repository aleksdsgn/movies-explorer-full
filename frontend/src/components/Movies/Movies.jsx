import { useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { calcCardsCounter } from '../../utils/cardsCounter';
import { SHORTS_DURATION } from '../../utils/constants';

function Movies() {
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

  // счетчик количесва карточек для загрузки
  const counter = calcCardsCounter();
  const [cardsCounter, setCardsCounter] = useState(counter.init);
  const loadMore = () => {
    const { more } = calcCardsCounter();
    setCardsCounter(cardsCounter + more);
  };

  const filterMovies = (search) => {
    setSearchWasDone(true);
    // eslint-disable-next-line no-shadow
    const filter = (sourceMovies) => {
      setFilteredMovies(sourceMovies.filter((movie) => {
        const isName = movie.nameRU.toLowerCase().includes(search.name.toLowerCase());
        const isShorts = search.isShorts ? movie.duration <= SHORTS_DURATION : true;
        return isName && isShorts;
      }));
    };
    if (sourceMovies.length === 0) {
      const localMovies = JSON.parse(localStorage.getItem('local-movies') || '[]');
      if (localMovies.length === 0) {
        const jwt = localStorage.getItem('jwt');
        mainApi.setToken(jwt);
        setIsShowPreloader(true);
        Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
          .then(([beatMovies, { data: savedMovies }]) => {
            const preparedMovies = beatMovies.map((movie) => {
              const savedMovie = savedMovies.find((savedFilm) => savedFilm.movieId === movie.id);
              movie._id = savedMovie !== undefined ? savedMovie._id : '';
              movie.movieId = movie.id;
              movie.thumbnail = `https://api.nomoreparties.co/${movie.image.url}`;
              movie.saved = savedMovie !== undefined;
              return movie;
            });
            setSourceMovies(preparedMovies);
            filter(preparedMovies);
            localStorage.setItem('local-movies', JSON.stringify(preparedMovies));
            setIsShowPreloader(false);
          })
          .catch((err) => {
            console.error(err);
            setApiHasError(true);
          });
      } else {
        setSourceMovies(localMovies);
        filter(localMovies);
      }
    } else {
      filter(sourceMovies);
    }
    const { init } = calcCardsCounter();
    setCardsCounter(init);
  };

  // удаление карточки фильма из сохраненных
  const handleDeleteMovie = (movie) => {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSourceMovies((beatMovies) => {
          const updatedMovies = beatMovies.map((beatMovie) => {
            if (beatMovie._id === movie._id) {
              beatMovie.saved = false;
            }
            return beatMovie;
          });
          localStorage.setItem('local-movies', JSON.stringify(updatedMovies));
          return updatedMovies;
        });
        localStorage.removeItem('saved-movies');
      })
      .catch((err) => {
        console.error(err);
        setApiHasError(true);
      });
  };

  // добавить в "сохраненные фильмы"
  const handleSaveMoovie = (movie) => {
    const newCard = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };
    mainApi.saveMovie(newCard)
      .then((serverMovie) => {
        setSourceMovies((beatMovies) => {
          localStorage.removeItem('saved-movies');
          const updatedMovies = beatMovies.map((beatMovie) => {
            if (beatMovie.id === serverMovie.movieId) {
              beatMovie.saved = true;
              beatMovie._id = serverMovie._id;
              beatMovie.movieId = serverMovie.movieId;
              beatMovie.thumbnail = serverMovie.thumbnail;
            }
            return beatMovie;
          });
          localStorage.setItem('local-movies', JSON.stringify(updatedMovies));
          return updatedMovies;
        });
      })
      .catch((err) => {
        console.error(err);
        setApiHasError(true);
      });
  };

  // в зависимости от того сохранен ли фильм выхывается удаление или сохранение
  const handleClickUpdateMovie = (movie) => (movie.saved ? handleDeleteMovie(movie) : handleSaveMoovie(movie));

  return (
    <main className="movies">
      <SearchForm filterMovies={filterMovies} page="movies" />
      {isShowPreloader
        && (
        <div className="movies__preloader-container">
          <Preloader />
        </div>
        )}
      <MoviesCardList
        cards={filteredMovies.filter((_, i) => i < cardsCounter)}
        onClickUpdateMovie={handleClickUpdateMovie}
        searchWasDone={searchWasDone}
        loadMore={loadMore}
        hasMore={filteredMovies.length > cardsCounter}
        apiHasError={apiHasError}
      />
    </main>
  );
}

export default Movies;
