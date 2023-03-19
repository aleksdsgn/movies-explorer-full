import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ card, onClickUpdateMovie }) {
  const { pathname } = useLocation();

  // свойства кнопки сохранения/удаления
  // вид кнопки в зависимости от роута
  const typeButton = pathname === '/saved-movies' ? 'movies-card__button_type_delete' : 'movies-card__button_type_favorite';
  // состоние кнопки "сохранить"
  const typeSaveButton = card.saved ? 'movies-card__button_type_favorite-enable' : 'movies-card__button_type_favorite-disabled';
  // значение поля aria-label в зависимости от вида кнопки
  const typeAriaSaveButton = card.saved ? 'Убрать из сохраненных' : 'Сохранить';
  const typeAriaButton = pathname === '/saved-movies' ? 'Удалить' : typeAriaSaveButton;

  // обработчик сохранения/удаления карточки фильма
  const handleSaveMovie = () => {
    onClickUpdateMovie(card);
  };

  // приведение продолжительности фильма в удобочитаемый вид
  const durationH = card.duration >= 60 ? `${Math.floor(card.duration / 60)} ч ` : '';
  const durationM = card.duration === 60 ? '' : `${card.duration % 60} м`;
  const duration = `${durationH}${durationM}`.trim();

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{duration}</p>
        </div>

        <button
          className={`movies-card__button ${typeButton} ${typeSaveButton} link-animation`}
          onClick={handleSaveMovie}
          aria-label={typeAriaButton}
          type="button"
        />
      </div>
      <a className="movies-card__link-image link-animation" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__image"
          alt="Картинка фильма"
          src={card.thumbnail}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
