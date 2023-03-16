import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteCafeIdb from '../../src/scripts/data/favorite-cafe-idb';

const createLikeButtonPresenterWithCafe = async (cafe) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteCafes: FavoriteCafeIdb,
    cafe,
  });
};

export { createLikeButtonPresenterWithCafe };
