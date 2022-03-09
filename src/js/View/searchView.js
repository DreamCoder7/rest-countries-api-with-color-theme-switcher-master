import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search__field");

  _clearSearch() {
    this._parentElement.value = "";
  }

  addHundlerSearchInput(hundler) {
    this._parentElement.addEventListener("keyup", function (e) {
      let searchTarget = e.target.value.toLowerCase();
      hundler(searchTarget);
    });
  }
}

export default new SearchView();
