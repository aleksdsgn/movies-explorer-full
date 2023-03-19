import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationLoggedIn.css';

function NavigationLoggedIn() {
  const { pathname } = useLocation();

  // видимость на определенных страницах
  const visible = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile';

  // изменение цвета кнопок при отображении на главной странице
  const colorLink = pathname === '/' ? 'navigation-logged-in__link_color_promo-page' : '';
  const colorBurger = pathname === '/' ? 'navigation-logged-in__burger_color_promo-page' : '';
  const colorBurgerSpan = pathname === '/' ? 'navigation-logged-in__burger-span_color_promo-page' : '';

  // бургер-меню
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  // изменить бургер на крестик
  const burgerActive = isBurgerOpen ? 'navigation-logged-in__burger_active' : '';
  // изменить цвет крестика при отображении на главной странице
  const colorBurgerActive = isBurgerOpen ? 'navigation-logged-in__burger_active_color_promo-page' : '';

  // паранжа под меню
  const coverActive = isBurgerOpen ? 'navigation-logged-in__cover_active' : '';

  return (
    (visible)
    && (
      <div className="navigation-logged-in">

        <button
          onClick={toggleBurger}
          className={`navigation-logged-in__burger link-animation ${colorBurger} ${burgerActive} ${colorBurgerActive}`}
          type="button"
        >
          <span className={`navigation-logged-in__burger-span ${colorBurgerSpan}`} />
        </button>

        <nav className={`navigation-logged-in__menu ${isBurgerOpen ? 'navigation-logged-in__menu_open' : ''}`}>

          <ul className="navigation-logged-in__list">
            <li className="navigation-logged-in__list-item">
              <Link
                to="/"
                className={
                  `navigation-logged-in__link
                  navigation-logged-in__link_type_home
                  link-animation
                  ${pathname === '/' ? 'navigation-logged-in__link_active' : ''}
                  ${colorLink}`
                }
              >
                Главная
              </Link>
            </li>
            <li className="navigation-logged-in__list-item">
              <Link
                to="/movies"
                className={
                  `navigation-logged-in__link
                  navigation-logged-in__link_type_movies
                  link-animation
                  ${pathname === '/movies' ? 'navigation-logged-in__link_active' : ''}
                  ${colorLink}`
                }
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation-logged-in__list-item">
              <Link
                to="/saved-movies"
                className={
                  `navigation-logged-in__link
                  navigation-logged-in__link_type_saved-movies
                  link-animation
                  ${pathname === '/saved-movies' ? 'navigation-logged-in__link_active' : ''}
                  ${colorLink}`
                }
              >
                Сохранённые фильмы
              </Link>
            </li>
            <li className="navigation-logged-in__list-item">
              <Link
                to="/profile"
                className="
                  navigation-logged-in__link
                  navigation-logged-in__link_type_profile
                  link-animation"
              >
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`navigation-logged-in__cover ${coverActive}`} />

      </div>
    )
  );
}

export default NavigationLoggedIn;
