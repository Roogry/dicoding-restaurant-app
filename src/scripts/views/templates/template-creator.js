import CONFIG from '../../globals/config';
import TextHelper from '../../utils/text-helper';

const createCafeDetailTemplate = (cafe) => `
  <section class="hero">
    <div class="hero__inner hero__image__container">
      <picture>
        <source media="(max-width: 600px)" srcset="${`${CONFIG.BASE_IMAGE_URL}small/${cafe.pictureId}`}">
        <img class="lazyload hero__inner_image" data-src="${`${CONFIG.BASE_IMAGE_URL}large/${cafe.pictureId}`}" alt="${cafe.name}">
      </picture>
      <div class="hero__inner__right">
        <p class="hero__info">Rating ${cafe.rating}</p>
        <h1 class="hero__title">${cafe.name} <span class="hero__highlight">(${cafe.city})</span></h1>
        <p class="hero__tagline">${cafe.address}</p>

        <div id="likeButtonContainer"></div>
      </div>
    </div>
  </section>
  <section id="cafe__section">
    <div id="cafe" class="cafe__content" tabindex="0">
      <div class="cafe__description">
        <h3>Deskripsi</h3>
        <p>${cafe.description}</p>
      </div>
    </div>
  </section>
  <section id="menu__section">
    <div class="section__label">
      <h2 class="section__title">Pilihan Menu</h2>
      <p class="section__description">Nimati pilihan menu yang disediakan oleh cafe kami</p>
    </div>
    <div id="menus" class="menus">
      <div class="menu__foods">
        <table>
          <thead>
            <tr>
              <th>Makanan</th>
            </tr>
          </thead>
          <tbody id='makanan'>

          </tbody>
        </table>
      </div>
      <div class="menu__drinks">
        <table>
          <thead>
            <tr>
              <th>Minuman</th>
            </tr>
          </thead>
          <tbody id='minuman'>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section id="review__section">
    <div class="section__label">
      <p class="section__highlight">Review cafe</p>
      <h2 class="section__title">Kata Mereka</h2>
      <p class="section__description">Lihat bagaimana pendapat orang-orang</p>
    </div>
    <div id="reviews" class="reviews" tabindex="0"></div>
  </section>
`;

const createCafeItemTemplate = (cafe) => `
  <article class="cafe-item" tabindex="0">
    <div class="cafe-item__header">
      <picture>
        <img class="lazyload cafe-item__thumbnail" data-src="${cafe.pictureId ? `${CONFIG.BASE_IMAGE_URL}small/${cafe.pictureId}` : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="">
      </picture>
      <div class="cafe-item__location">
        <p class="cafe-item__city">${cafe.city}</p>
      </div>
    </div>
    <div class="cafe-item__content">
      <p class="cafe-item__info">
          Rating ${cafe.rating}
      </p>
      <h3 class="cafe-item__title">
          <a href="/#/detail/${cafe.id}">${cafe.name}</a>
      </h3>
      <p class="cafe-item__description">
          ${TextHelper.truncate(cafe.description, 100)}
      </p>
    </div>
  </article>
`;

const createReviewItemTemplate = (review) => `
  <article class="review-item" tabindex="0">
    <div class="review-item__content">
      <p class="review-item__date">
          ${review.date}
      </p>
      <h3 class="review-item__name">
          ${review.name}
      </h3>
      <p class="review-item__review">
          ${review.review}
      </p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this cafe" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i> Suka
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this cafe" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i> Disukai
  </button>
`;

export {
  createCafeItemTemplate,
  createCafeDetailTemplate,
  createReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
