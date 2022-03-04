import View from "./View.js";

class DarkMode extends View {
  _darkInputEl = document.querySelector(".nav__btn");

  _headerEl = document.querySelector(".header");
  _mainEl = document.querySelector(".main");

  constructor() {
    super();
    this._addHundlerDarkMode();
  }

  _toggleDarkMode() {
    this._headerEl.classList.toggle("dark__mode");
    this._mainEl.classList.toggle("dark__mode");
  }

  _addHundlerDarkMode() {
    this._darkInputEl.addEventListener(
      "click",
      this._toggleDarkMode.bind(this)
    );
  }
}

export default new DarkMode();
