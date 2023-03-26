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
        <p className="promo__text">
          Чтобы попасть в проект пройдите простую авторизацию по ссылкам в хедере.
        </p>
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
