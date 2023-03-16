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
    const mainContent = document.querySelector('#mainContent');

    mainContent.innerHTML = createCafeDetailTemplate(cafe);

    const makananContainer = document.querySelector('#makanan');
    cafe.menus.foods.forEach((food) => {
      makananContainer.innerHTML += `
        <tr class='menus'>
          <td>${food.name}</td>
        </tr>
      `;
    });

    const minumanContainer = document.querySelector('#minuman');
    cafe.menus.drinks.forEach((drink) => {
      minumanContainer.innerHTML += `
        <tr class='menus'>
          <td>${drink.name}</td>
        </tr>
      `;
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
