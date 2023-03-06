import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source';
import { createCafeDetailTemplate, createReviewItemTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return '';
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cafe = await RestaurantApiSource.detailCafe(url.id);
    const mainContent = document.querySelector('#mainContent');

    mainContent.innerHTML = createCafeDetailTemplate(cafe);
    $('.hero').css('background-image', `linear-gradient(0deg, rgba(255, 249, 234, 0.7), rgba(255, 249, 234, 1)), url(${`${CONFIG.BASE_IMAGE_URL}large/${cafe.pictureId}`})`);

    cafe.menus.foods.forEach((food) => {
      $('#makanan').append(`
        <tr class='menus'>
          <td>${food.name}</td>
        </tr>
      `);
    });

    cafe.menus.drinks.forEach((drink) => {
      $('#minuman').append(`
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
