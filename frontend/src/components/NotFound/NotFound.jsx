import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link
          onClick={goBack}
          className="not-found__link link-animation"
          aria-label="Вернуться назад"
        >
          Назад
        </Link>
      </div>

    </section>
  );
}

export default NotFound;
