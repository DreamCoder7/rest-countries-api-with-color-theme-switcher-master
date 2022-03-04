import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search__field");

  getQuery() {
    const query = document.querySelector(".search__field").value;
    console.log(query);
    return query;
  }

  addHundlerSearchInput(hundler) {
    this._parentElement.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = document.querySelector(".search__field").value;
        console.log(query);
        // console.log(this.getQuery());
        hundler(query);
      }
    });
  }
}

export default new SearchView();
