/* eslint-disable no-undef */
class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
        <h1 class="header__title"><a href="/">Cafe Market</a></h1>
        <div class="header__inner">
          <button class="nav-mobile">
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
          </button>
          <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="/">Home</a></li>
                <li class="nav__item"><a href="#">Favorite</a></li>
                <li class="nav__item"><a href="https://github.com/Roogry">About Us</a></li>
            </ul>
          </nav>
        </div>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
