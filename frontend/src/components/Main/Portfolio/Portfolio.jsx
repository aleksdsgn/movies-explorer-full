import './Portfolio.css';

function Portfolio() {
  return (
    <section className="section portfolio">
      <h3 className="portfolio__title">
        Портфолио (ссылки на репозитории)
      </h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn/movies-explorer-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение Movies&#8209;Explorer
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn/react-mesto-api-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение Mesto
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт &laquo;Путешествия по&nbsp;России&raquo;
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт &laquo;Научиться учиться&raquo;
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
