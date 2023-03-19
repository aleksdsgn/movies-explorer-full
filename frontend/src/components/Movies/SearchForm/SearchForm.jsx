/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef, useEffect } from 'react';
import './SearchForm.css';

function SearchForm({ filterMovies, required = true, page }) {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [error, setError] = useState({
    name: '',
    isShorts: '',
  });
  const [value, setValue] = useState({
    name: '',
    isShorts: false,
  });

  const formRef = useRef(null);

  // Эффект отслеживания состояния поля input поиска
  useEffect(() => {
    const searchMovies = JSON.parse(localStorage.getItem('search-movies'));
    if (searchMovies) {
      setValue(searchMovies);
      filterMovies(searchMovies);
    }
    if (page === 'saved-movies') {
      filterMovies({ name: '', isShorts: false });
      setValue({ name: '', isShorts: false });
    }
  }, []);

  const handleChange = (e) => {
    const {
      name,
      value: inputValue,
      validationMessage,
    } = e.target;
    const updatedValue = {
      ...value,
      [name]: inputValue,
    };
    if (page === 'movies') {
      localStorage.setItem('search-movies', JSON.stringify(updatedValue));
    }
    setValue(updatedValue);
    setError((state) => ({
      ...state,
      [name]: validationMessage,
    }));
    setIsDisabledButton(!formRef.current.checkValidity());
  };

  const handleCheckbox = (e) => {
    const {
      name,
      checked,
    } = e.target;
    const updatedValue = {
      ...value,
      [name]: checked,
    };
    if (page === 'movies') {
      localStorage.setItem('search-movies', JSON.stringify(updatedValue));
    }
    setValue(updatedValue);
    filterMovies(updatedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterMovies(value);
  };

  return (
    <div className="section search-form">
      <form
        className="search-form__container"
        name="search-films"
        onSubmit={handleSubmit}
        ref={formRef}
        noValidate
      >
        <fieldset className="search-form__field search-form__field-input">
          <div className="search-form__icon" />
          <label className="search-form__input-wrapper" htmlFor="film">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              id="film"
              name="name"
              value={value.name}
              required={required}
              onChange={handleChange}
            />
          </label>
          <button
            className={`search-form__submit ${!isDisabledButton ? 'search-form__submit_active link-animation' : ''}`}
            type="submit"
            aria-label="Найти фильм"
            disabled={isDisabledButton}
          />
        </fieldset>
        <fieldset className="search-form__field search-form__field-short-films">
          <div className="search-form__line" />
          <label className="search-form__checkbox-label" htmlFor="short-films">
            <input
              className="search-form__checkbox"
              type="checkbox"
              id="short-films"
              name="isShorts"
              checked={value.isShorts}
              onChange={handleCheckbox}
            />
            <span className="search-form__checkbox-switch" />
          </label>
          <p className="search-form__short-films-text">
            Короткометражки
          </p>
        </fieldset>
      </form>
      <span className={`search-form__error ${isDisabledButton ? 'search-form__error_active' : ''}`}>
        {error.name}
      </span>
      <hr className="line search-form__hr-line" />
    </div>
  );
}

export default SearchForm;
