import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const { pathname } = useLocation();
  const disableNavigation = pathname === '/' ? '' : 'navigation_disabled';

  return (
    <nav className={`navigation ${disableNavigation}`}>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <Link
            to="/signup"
            className="
              navigation__link
              navigation__link_type_signup
              link-animation"
          >
            Регистрация
          </Link>
        </li>
        <li className="navigation__list-item">
          <Link
            to="/signin"
            className="
              navigation__link
              navigation__link_type_signin
              link-animation"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
