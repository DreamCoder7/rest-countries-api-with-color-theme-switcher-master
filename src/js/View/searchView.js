import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search__field");

  // getQuery() {
  //   const query = this._parentElement.value;
  //   this._clearSearch();
  //   return query;
  // }

  // _clearSearch() {
  //   this._parentElement.value = "";
  // }

  addHundlerSearchInput(hundler) {
    this._parentElement.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = document.querySelector(".search__field").value;
        hundler(query);
      }
    });
  }
}

export default new SearchView();
