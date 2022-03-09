import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search__field");

  addHundlerSearchInput(hundler) {
    this._parentElement.addEventListener("keyup", function (e) {
      let searchTarget = e.target.value.toLowerCase();
      document.querySelector(".country__container").innerHTML = "";
      hundler(searchTarget);
    });
  }
}

export default new SearchView();
