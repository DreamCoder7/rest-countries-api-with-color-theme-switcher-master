import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".options");

  _mainNavBtn = document.querySelector(".main__nav--btn");

  constructor() {
    super();
    this.optionFilter();
  }

  toggleOption() {
    this._parentElement.classList.toggle("option__hidden");
  }

  optionFilter() {
    this._mainNavBtn.addEventListener("click", this.toggleOption.bind(this));
  }

  addHundlerFilter(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const input = e.target.closest(".option__btn");
      if (!input) return;
      document.querySelector(".country__container").innerHTML = "";
      hundler(input.textContent);
    });
  }
}

export default new FilterView();
