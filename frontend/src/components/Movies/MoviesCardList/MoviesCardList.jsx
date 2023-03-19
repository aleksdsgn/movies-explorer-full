import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  cards,
  onClickUpdateMovie,
  searchWasDone,
  loadMore,
  hasMore,
  apiHasError,
}) {
  const { pathname } = useLocation();

  return (
    <div className="section movies-cards">
      <ul className="movies-cards__list">
        {cards.map((card) => (
          <MoviesCard
            key={card.id || card._id}
            card={card}
            onClickUpdateMovie={onClickUpdateMovie}
          />
        ))}
      </ul>

      {/* если был произведен поиск + не было ошибок + это пустой список */}
      {cards.length === 0
        && searchWasDone
        && !apiHasError && (
        <div>
          <span className="movies-cards__message">Ничего не найдено</span>
        </div>
      )}

      {pathname === '/movies'
        && hasMore
        && (
        <div className="movies-cards__button-more-wrapper">
          <button
            className="movies-cards__button-more link-animation"
            onClick={loadMore}
            aria-label="Подгрузить еще больше карточек"
            type="button"
          >
            Ещё
          </button>
        </div>
        )}

      { apiHasError && (
      <p className="movies-cards__message movies-cards__message_type_api-error">
        Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз.
      </p>
      )}

    </div>
  );
}

export default MoviesCardList;
