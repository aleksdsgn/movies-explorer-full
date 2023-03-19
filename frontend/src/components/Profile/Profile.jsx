import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidation from '../../hooks/useFormValidation';
import './Profile.css';

function Profile({
  onUpdateUser,
  statusErrorProfile,
  handleLogout,
}) {
  // сообщение которое будет выводится после сабмита
  const [messageForm, setMessageForm] = useState('');
  // выбор класса для типа сообщения - положительного или негативного
  const [classFormMessageType, setClassFormMessageType] = useState('');
  // данные профиля
  const [userData, setUserData] = useState(false);
  // подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormValidation();

  const {
    name = currentUser.name, email = currentUser.email,
  } = values;

  // подстановка в инпуты загруженных данных пользователя из API
  useEffect(() => {
    setUserData(name === currentUser.name && email === currentUser.email);
  }, [name, email, currentUser.name, currentUser.email, userData]);

  const handleMessageForm = () => {
    if (statusErrorProfile === 200) {
      setMessageForm('Данные успешно обновлены');
      setClassFormMessageType('profile__form-message_type_success');
    } else {
      setMessageForm(statusErrorProfile.message);
      setClassFormMessageType('profile__form-message_type_error');
    }
  };

  // обработчик изменений в данных инпутов
  const handleChangeForm = () => {
    if (!userData) {
      setMessageForm('');
    }
  };

  // обработчик сабмита
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({ name, email });
    }
  };

  useEffect(() => {
    handleMessageForm();
  }, [statusErrorProfile]);

  useEffect(() => {
    handleChangeForm();
  }, [userData]);

  return (
    <section className="profile">

      <form className="profile__form" name="profile" onSubmit={handleSubmit}>

        <fieldset className="profile__fieldset">
          <h1 className="profile__title">{`Привет ${currentUser.name}!`}</h1>

          <label className="profile__form-label" htmlFor="name">
            Имя
            <input
              className="profile__form-input"
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
          </label>

          <hr className="line profile__line" />

          <label className="profile__form-label" htmlFor="email">
            E-mail
            <input
              className="profile__form-input"
              onChange={handleChange}
              value={email || ''}
              aria-label="Введите ваш e-mail"
              id="email"
              name="email"
              placeholder="Ваш e-mail"
              type="email"
              required
            />
          </label>

        </fieldset>

        <fieldset className="profile__fieldset">

          <span className="profile__form-message profile__form-message_type_error">
            {errors.name}
            {errors.email}
          </span>
          <span className={`profile__form-message ${classFormMessageType}`}>
            {messageForm}
          </span>

          <button
            className="profile__button button-animation"
            // disabled={!isValid}
            disabled={!isValid || userData}
            aria-label="Редактировать профиль"
            type="submit"
          >
            Редактировать
          </button>

          <button
            className="profile__button profile__button_type_logout link-animation"
            aria-label="Выйти из аккаунта"
            type="button"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </fieldset>

      </form>

    </section>
  );
}

export default Profile;
