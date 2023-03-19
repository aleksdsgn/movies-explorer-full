import './Promo.css';
import promoImg from '../../../images/promo.svg';

function Promo() {
  return (
    <section className="section promo">
      <div className="promo-container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб‑разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="button promo__button button-animation" type="button">
          Узнать больше
        </button>
      </div>
      <img
        className="promo__img"
        src={promoImg}
        alt="декоративный элемент в виде планеты"
      />
    </section>
  );
}

export default Promo;
