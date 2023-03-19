import './Techs.css';

function Techs() {
  return (
    <section className="section techs">
      <h2 className="section__header">Технологии</h2>
      <article className="techs__container">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-item">
            <p className="techs__list-text">HTML</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-text">JS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-text">CSS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-text">React</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-text">Git</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-text">Express.js</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-text">mongoDB</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Techs;
