import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createCafeDetailTemplate, createReviewItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteCafeIdb from '../../data/favorite-cafe-idb';

const Detail = {
  async render() {
    return '';
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await RestaurantApiSource.detailCafe(url.id);
    const hero = document.querySelector('.hero');
    const mainContent = document.querySelector('#mainContent');
    const makananContainer = document.querySelector('#makananContainer');
    const minumanContainer = document.querySelector('#minumanContainer');

    mainContent.innerHTML = createCafeDetailTemplate(cafe);
    hero.style.backgroundImage = `linear-gradient(0deg, rgba(255, 249, 234, 0.7), rgba(255, 249, 234, 1)), url(${`${CONFIG.BASE_IMAGE_URL}large/${cafe.pictureId}`})`;

    cafe.menus.foods.forEach((food) => {
      makananContainer.append(`
        <tr class='menus'>
          <td>${food.name}</td>
        </tr>
      `);
    });

    cafe.menus.drinks.forEach((drink) => {
      minumanContainer.append(`
        <tr class='menus'>
          <td>${drink.name}</td>
        </tr>
      `);
    });

    const reviewsContainer = document.querySelector('#reviews');
    cafe.customerReviews.forEach((review) => {
      reviewsContainer.innerHTML += createReviewItemTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteCafes: FavoriteCafeIdb,
      cafe: {
        id: cafe.id,
        name: cafe.name,
        city: cafe.city,
        description: cafe.description,
        pictureId: cafe.pictureId,
        rating: cafe.rating,
        menus: cafe.menus,
        customerReviews: cafe.customerReviews,
      },
    });
  },
};

export default Detail;
