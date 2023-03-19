import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavigationLoggedIn from '../NavigationLoggedIn/NavigationLoggedIn';

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const colorHeader = pathname === '/' ? 'header_theme_black' : 'header_theme_light';
  const visible = pathname === '/signin' || pathname === '/signup';

  return (
    (!visible)
    && (
      <header className={`section header ${colorHeader}`}>

        <Link to="/" className="header__logo link-animation">
          <img
            className="header__img"
            src={logo}
            alt="логотип"
          />
        </Link>

        {loggedIn ? <NavigationLoggedIn /> : <Navigation />}

      </header>
    )
  );
}

export default Header;
