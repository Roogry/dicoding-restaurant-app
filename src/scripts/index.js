import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import "../components/app-bar";
import data from "../DATA.json";
import heroBackground from '../public/images/heros/hero-image_2.jpg';
import cleanIllustration from '../public/images/strengths/cleaning.png';
import chargeIllustration from '../public/images/strengths/charge.png';
import cheapIllustration from '../public/images/strengths/cheap.png';

const navMobile = $(".nav-mobile");

$('.hero').css('background-image', 'linear-gradient(0deg, rgba(255, 249, 234, 0.7), rgba(255, 249, 234, 1)), url(' + heroBackground + ')');
$('#strength-clean .strength-item__thumbnail').attr("src", cleanIllustration);
$('#strength-charge .strength-item__thumbnail').attr("src", chargeIllustration);
$('#strength-cheap .strength-item__thumbnail').attr("src", cheapIllustration);

const truncate = (text, num) => {
  if (num > text.length) {
    return text;
  }
  const textCropped = text.substring(0, num);
  return `${textCropped}...`;
};

let cafeHtml = "";
data.restaurants.forEach((cafe) => {
  cafeHtml += `
    <article class="cafe-item" tabindex="0">
        <div class="cafe-item__header">
            <img class="cafe-item__thumbnail"
                src="${cafe["pictureId"]}"
                alt="">
            <div class="cafe-item__location">
                <p class="cafe-item__city">Kota ${cafe["city"]}</p>
            </div>
        </div>
        <div class="cafe-item__content">
            <p class="cafe-item__info">
                Rating ${cafe["rating"]}
            </p>
            <h3 class="cafe-item__title">
                <a href="#">${cafe["name"]}</a>
            </h3>
            <p class="cafe-item__description">
                ${truncate(cafe["description"], 100)}
            </p>
        </div>
    </article>
    `;
  $(".cafe").html(cafeHtml);
});

$(navMobile).on("click", () => {
  $(".nav").toggleClass("open");
  $(".hamburger").toggleClass("open");
});
