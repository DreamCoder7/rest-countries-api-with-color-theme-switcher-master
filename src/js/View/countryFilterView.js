import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".options");

  _countryEl = document.querySelectorAll(".country");
  //   _optionBtns = document.querySelectorAll("option__btn");

  constructor() {
    super();
    // console.log(this._addHundlerFilter());
    // this._countryFilter();
  }

  //   _countryFilter() {
  //     this._countryEl.forEach((country) => {
  //       return country;
  //     });
  //   }

  addHundlerFilter(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const input = e.target.closest(".option__btn");
      // console.log(input.textContent);
      if (!input) return;
      hundler(input.textContent);
    });
  }
}

export default new FilterView();
