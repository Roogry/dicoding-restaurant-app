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
          <button id="hamburgerButton">
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
          </button>
          <nav id="navigationDrawer" class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="#/cafes">Home</a></li>
                <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                <li class="nav__item"><a href="https://github.com/Roogry">About Us</a></li>
            </ul>
          </nav>
        </div>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
