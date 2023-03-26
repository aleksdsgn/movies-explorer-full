import './AboutMe.css';
import myAvatar from '../../../images/myavatar.png';

function AboutMe() {
  return (
    <section className="section about-me">
      <h2 className="section__header">Студент</h2>
      <article className="about-me__container">
        <div className="about-me__container-text">
          <h3 className="about-me__title">
            Шляпников Алексей
          </h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 34 года
          </p>
          <p className="about-me__text">
            Меняю специальность на ту, к которой меня всегда тянуло.
            Уже более года я совмещаю 1,5 работы дизайнером
            (full-time + part-time), семью и обучение.
            Очень «драйвит» веб-разработка.
            Понимаю, что чем больше узнаю, тем меньше я знаю.
            Хочу нырнуть во фронтенд на реальных задачах и впитывать
            знания которые можно применить на практике и расширить
            зону компетенций. Сейчас закрепляю знания в Rolling Scopes School
            и обрастаю «веб-девелоперский жирком»
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
