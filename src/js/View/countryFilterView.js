import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".options");

  _optionInput = document.querySelectorAll(".option__input");

  constructor() {
    super();
    this.addHundlerFilter();
  }

  addHundlerFilter() {
    this._parentElement.addEventListener("click", function (e) {
      const input = e.target.closest("option__input");

      if (!input) return;
      this._optionInput.forEach((input) => {
        console.log(input.value);
      });
    });
  }
}

export default new FilterView();
