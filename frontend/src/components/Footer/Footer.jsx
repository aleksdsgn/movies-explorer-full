import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const { pathname } = useLocation();
  const visible = pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';

  return (
    (visible)
    && (
    <footer className="section footer">
      <h3 className="footer__text footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__text footer__date">
          © 2023
        </p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__text footer__link link-animation"
              href="https://github.com/aleksdsgn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__text footer__link link-animation"
              href="https://github.com/aleksdsgn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
    )
  );
}

export default Footer;
