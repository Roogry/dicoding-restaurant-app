const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const herosTarget = path.resolve(__dirname, '../../../src/public/images/heros');
const herosDestination = path.resolve(__dirname, '../../../dist/images/heros');
const strengthsTarget = path.resolve(__dirname, '../../../src/public/images/strengths');
const strengthsDestination = path.resolve(__dirname, '../../../dist/images/strengths');

if (!fs.existsSync(herosDestination)) {
  fs.mkdirSync(herosDestination, { recursive: true });
}

if (!fs.existsSync(strengthsDestination)) {
  fs.mkdirSync(strengthsDestination, { recursive: true });
}

fs.readdirSync(herosTarget)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${herosTarget}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${herosDestination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${herosTarget}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${herosDestination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });

fs.readdirSync(strengthsTarget)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${strengthsTarget}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${strengthsDestination}/${image.split('.').slice(0, -1).join('.')}-large.png`,
      ));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${strengthsTarget}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${strengthsDestination}/${image.split('.').slice(0, -1).join('.')}-small.png`,
      ));
  });
