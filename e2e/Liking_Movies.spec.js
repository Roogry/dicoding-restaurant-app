const assert = require('assert');

Feature('Liking Cafes');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyMessage = 'Tidak ada cafe untuk ditampilkan';

Scenario('showing empty favorite cafe', ({ I }) => {
  I.see(emptyMessage, '#cafe-item__not__found');
});

Scenario('liking one cafe', async ({ I }) => {
  I.see(emptyMessage, '#cafe-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.cafe-item__title a');

  const firstCafe = locate('.cafe-item__title a').first();
  const firstCafeTitle = await I.grabTextFrom(firstCafe);
  I.click(firstCafe);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cafe-item');
  const likedCafeTitle = await I.grabTextFrom('.cafe-item__title a');

  assert.strictEqual(firstCafeTitle, likedCafeTitle);
});

Scenario('unliking one cafe', async ({ I }) => {
  I.see(emptyMessage, '#cafe-item__not__found');
  I.amOnPage('/');

  I.waitForElement('.cafe-item__title a');

  const firstCafe = locate('.cafe-item__title a').first();
  const firstCafeTitle = await I.grabTextFrom(firstCafe);
  I.click(firstCafe);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cafe-item');

  const likedCafeTitle = await I.grabTextFrom('.cafe-item__title a');
  assert.strictEqual(firstCafeTitle, likedCafeTitle);

  I.click(likedCafeTitle);
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#cafe-item__not__found');

  const noFavCafe = await I.grabTextFrom('#cafe-item__not__found');
  assert.strictEqual(noFavCafe, emptyMessage);
});
