import heroBackground from '../../../public/images/heros/hero-image_2.jpg';
import cleanIllustration from '../../../public/images/strengths/cleaning.png';
import chargeIllustration from '../../../public/images/strengths/charge.png';
import cheapIllustration from '../../../public/images/strengths/cheap.png';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createCafeItemTemplate } from '../templates/template-creator';

const Home = {
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
      <section id="strength__section">
        <div class="section__label">
          <p class="section__highlight">Kriteria kami memilih</p>
          <h2 class="section__title">Kepastian Rekomendasi</h2>
          <p class="section__description">Nikmati Pengalaman Bersantap yang Tak Terlupakan dengan Garansi Kualitas Terbaik dari Kami</p>
        </div>
        <div class="strength">
          <article id="strength-clean" class="strength-item">
              <img class="strength-item__thumbnail"
                  src="" alt="">
              <div class="strength-item__content">
                  <h3 class="strength-item__title">
                    Bersih dan Nyaman
                  </h3>
                  <p class="strength-item__description">
                    Dijamin betah berlama-lama di cafe
                  </p>
              </div>
          </article>
          <article id="strength-charge" class="strength-item">
              <img class="strength-item__thumbnail"
                  src="" alt="">
              <div class="strength-item__content">
                  <h3 class="strength-item__title">
                    Tersedia Stop Kontak
                  </h3>
                  <p class="strength-item__description">
                    Bisa sambil kerja maupun buat tugas
                  </p>
              </div>
          </article>
          <article id="strength-cheap" class="strength-item">
              <img class="strength-item__thumbnail"
                  src="" alt="">
              <div class="strength-item__content">
                  <h3 class="strength-item__title">
                    Budget Anak Kos
                  </h3>
                  <p class="strength-item__description">
                    Rasa kualitas bintang lima harga kaki lima
                  </p>
              </div>
          </article>
        </div>
      </section>
      <section id="cafe__section">
        <div class="section__label">
          <p class="section__highlight">Berbagai cafe</p>
          <h2 class="section__title">Rekomendasi Cafe</h2>
          <p class="section__description">Temukan hidangan lezat berbalut kenyamanan dengan melihat pilihan cafe menarik dari berbagai sudut jalan</p>
        </div>
        <div id="cafes" class="cafes" tabindex="0"></div>
      </section>
    `;
  },

  async afterRender() {
    $('.hero').css('background-image', `linear-gradient(0deg, rgba(255, 249, 234, 0.7), rgba(255, 249, 234, 1)), url(${heroBackground})`);
    $('#strength-clean .strength-item__thumbnail').attr('src', cleanIllustration);
    $('#strength-charge .strength-item__thumbnail').attr('src', chargeIllustration);
    $('#strength-cheap .strength-item__thumbnail').attr('src', cheapIllustration);

    const cafes = await RestaurantApiSource.allCafes();
    const cafesContainer = document.querySelector('#cafes');
    cafes.forEach((cafe) => {
      cafesContainer.innerHTML += createCafeItemTemplate(cafe);
    });
  },
};

export default Home;
