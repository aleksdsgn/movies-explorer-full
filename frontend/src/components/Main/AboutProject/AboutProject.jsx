import './AboutProject.css';

function AboutProject() {
  return (
    <section className="section about-project">
      <h2 className="section__header">О проекте</h2>
      <article className="about-project__table">
        <div className="about-project__table-column">
          <h3 className="about-project__table-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__table-column">
          <h3 className="about-project__table-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__table-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <div className="about-project__progress-bar">
        <div className="about-project__progress-bar-cell about-project__progress-bar-cell_first">
          <p className="about-project__progress-bar-text">1 неделя</p>
        </div>
        <div className="about-project__progress-bar-cell about-project__progress-bar-cell_second">
          <p className="about-project__progress-bar-text">4 недели</p>
        </div>
        <div className="about-project__progress-bar-cell">
          <p className="about-project__progress-bar-text about-project__progress-bar-text_caption">Back-end</p>
        </div>
        <div className="about-project__progress-bar-cell">
          <p className="about-project__progress-bar-text about-project__progress-bar-text_caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
