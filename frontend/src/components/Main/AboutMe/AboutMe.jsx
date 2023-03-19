import './AboutMe.css';
import myAvatar from '../../../images/myavatar.png';

function AboutMe() {
  return (
    <section className="section about-me">
      <h2 className="section__header">Студент</h2>
      <article className="about-me__container">
        <div className="about-me__container-text">
          <h3 className="about-me__title">
            Виталий
          </h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__text">
            Тут должен быть мой текст. Я родился и живу в Саратове, закончил факультет
            экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё
            увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__link link-animation"
            href="https://github.com/aleksdsgn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__img"
          src={myAvatar}
          alt="фотография владельца страницы"
        />
      </article>
    </section>
  );
}

export default AboutMe;
