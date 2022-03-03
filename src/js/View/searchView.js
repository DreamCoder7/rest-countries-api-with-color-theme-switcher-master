import View from "./View.js";

class SearchView extends View {
  //   _parentEl = document.querySelector(".main__nav--search");
  _parentEl = document.querySelector(".search__field");

  getQuery() {
    // const query = this._parentEl.querySelector(".search__field").value;
    const query = this._parentEl.value;
    // this._clearSearch();
    return query;
  }

  // _clearSearch() {
  //   this._parentEl.querySelector(".search__field").value = "";
  // }

  addHundlerSearch() {
    this._parentEl.addEventListener("keypress", function (e) {
      e.preventDefault();
    });
  }
}

export default new SearchView();
