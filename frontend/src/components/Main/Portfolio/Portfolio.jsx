import './Portfolio.css';

function Portfolio() {
  return (
    <section className="section portfolio">
      <h3 className="portfolio__title">
        Портфолио
      </h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link link-animation"
            href="https://github.com/aleksdsgn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
