import FavoriteCafeIdb from '../src/scripts/data/favorite-cafe-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Cafe', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteCafeIdb.putCafe({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteCafeIdb.deleteCafe(1);
  });

  it('should display unlike widget when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this cafe"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the cafe has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    expect(document.querySelector('[aria-label="like this cafe"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked cafe from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    document.querySelector('[aria-label="unlike this cafe"]').dispatchEvent(new Event('click'));

    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });

  it('should not throw error if the unliked cafe is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteCafeIdb.deleteCafe(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this cafe"]').dispatchEvent(new Event('click'));
    expect(await FavoriteCafeIdb.getAllCafes()).toEqual([]);
  });
});
