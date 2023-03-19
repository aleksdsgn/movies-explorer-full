import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import useFormValidation from '../../hooks/useFormValidation';

function Register({
  handleRegister,
  statusErrorRegister,
}) {
  // передача данных в хук для валидации формы
  const {
    values, errors, isValid, handleChange,
  } = useFormValidation();

  // значения из полей ввода
  const { name, email, password } = values;

  // обработка сабмита формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // передача во внешний обработчик
      handleRegister(name, email, password);
    }
  };

  return (
    <section className="sign">

      <form className="sign__form" onSubmit={handleSubmit} name="register">
        <fieldset className="sign__fieldset">
          <Link to="/" className="sign__header link-animation" aria-label="На главную">
            <img className="sign__img" src={logo} alt="логотип" />
          </Link>
          <h1 className="sign__title">Добро пожаловать!</h1>

          <label className="sign__form-label" htmlFor="name">
            Имя
            <input
              className={`sign__form-input ${errors.name ? 'sign__form-input_type_error' : ''}`}
              onChange={handleChange}
              value={name || ''}
              aria-label="Введите ваше имя"
              id="name"
              minLength="2"
              maxLength="30"
              name="name"
              placeholder="Ваше имя"
              type="text"
              required
            />
            <span className="sign__form-error sign__form-error_type_input">
              {errors.name}
            </span>
          </label>

          <label className="sign__form-label" htmlFor="email">
            E-mail
            <input
              className={`sign__form-input ${errors.email ? 'sign__form-input_type_error' : ''}`}
              onChange={handleChange}
              value={email || ''}
              aria-label="Введите ваш e-mail"
              id="email"
              name="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              placeholder="Ваш e-mail"
              type="email"
              required
            />
            <span className="sign__form-error sign__form-error_type_input">
              {errors.email}
            </span>
          </label>

          <label className="sign__form-label" htmlFor="password">
            Пароль
            <input
              className={`sign__form-input ${errors.password ? 'sign__form-input_type_error' : ''}`}
              onChange={handleChange}
              value={password || ''}
              aria-label="Введите ваш пароль"
              id="password"
              minLength="8"
              name="password"
              placeholder="Ваш пароль"
              type="password"
              required
            />
            <span className="sign__form-error sign__form-error_type_input">
              {errors.password}
            </span>
          </label>
        </fieldset>

        <fieldset className="sign__fieldset">
          <span className="sign__form-error sign__form-error_type_form">
            {statusErrorRegister.message}
          </span>

          <button
            className="sign__form-button button-animation"
            disabled={!isValid}
            aria-label="Зарегистрироваться"
            type="submit"
          >
            Зарегистрироваться
          </button>

          <p className="sign__text">
            Уже зарегистрированы?
            <Link to="/signin" className="sign__text-link link-animation" aria-label="На страницу входа">
              Войти
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
