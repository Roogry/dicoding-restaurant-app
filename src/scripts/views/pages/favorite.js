import heroBackground from '../../../public/images/heros/hero-image_1.jpg';
import FavoriteCafeIdb from '../../data/favorite-cafe-idb';
import { createCafeItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Beri Keluarga Anda <br>Rasa Enak & <span class="hero__highlight">Nyaman</span></h1>
          <p class="hero__tagline">
            Memberikan berbagai tempat <br>makan yang enak dan nyaman.
          </p>
        </div>
      </section>
      <section id="cafe__section">
        <div class="section__label">
          <p class="section__highlight">Cafe yang disukai</p>
          <h2 class="section__title">Cafe Favoritmu</h2>
          <p class="section__description">Temu kangen dengan cafe favoritmu. Kunjungi kembali cafe menarik yang telah cocok dengan selera mu</p>
        </div>
        <div id="cafes" class="cafes" tabindex="0"></div>
      </section>
    `;
  },

  async afterRender() {
    $('.hero').css('background-image', `linear-gradient(0deg, rgba(255, 249, 234, 0.7), rgba(255, 249, 234, 1)), url(${heroBackground})`);
    const cafes = await FavoriteCafeIdb.getAllCafes();
    const cafesContainer = document.querySelector('#cafes');
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default Favorite;
