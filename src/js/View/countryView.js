import View from "./View.js";

class CountryView extends View {
  _parentElement = document.querySelector(".country__container");

  _generateMarkup() {
    return `
            <div class="country">
                <img class="country__img" src="${this._data.flag}" alt="${this._data.name} flag" />
                <div class="country__data">
                    <h3 class="country__name">${this._data.name}</h3>
                    <p class="country__row"><span>Population:</span>${this._data.population}</p>
                    <p class="country__row country__region"><span>Region:</span>${this._data.region}</p>
                    <p class="country__row"><span>Capital:</span>${this._data.capital}</p>
                </div>
            </div>
        `;
  }
}

export default new CountryView();
