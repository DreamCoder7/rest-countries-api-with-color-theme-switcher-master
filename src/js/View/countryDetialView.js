import View from "./View.js";

class CountryDetialView extends View {
  _parentElement = document.querySelector(".country__container");
  _countryEl = document.querySelector(".country");

  addHundlerCountryDetial(hundler) {
    this._parentElement.addEventListener("click", function (e) {
      const country = e.target.closest("country");
      if (!country) return;
      hundler();
    });
  }

  _generateMarkup() {
    return `
            <div class="country">
                <img class="country__img" src="${this._data.flag}" alt="${
      this._data.name
    } flag" />
                <div class="country__data">
                    <h3 class="country__name">${this._data.name}</h3>
                    <p class="country__row"><span>Native Name:</span>${
                      this._data.nativeName
                    }</p>
                    <p class="country__row"><span>Population:</span>${
                      this._data.population
                    }</p>
                    <p class="country__row"><span>Region:</span>${
                      this._data.region
                    }</p>
                    <p class="country__row"><span>Sub Region:</span>${
                      this._data.subRegion
                    }</p>
                    <p class="country__row"><span>Capital:</span>${
                      this._data.capital
                    }</p>
                    <p class="country__row"><span>Top Level Domain:</span>${
                      this._data.topleveldomain
                    }</p>
                    <p class="country__row"><span>Currencies:</span>${
                      this._data.currencies
                    }</p>
                    <p class="country__row"><span>Languages:</span>${this._data.languages.map(
                      (lng) => lng
                    )}</p>

                    <div class="country__borders">
                        <p class="country__row"><span>Border Countries:</span>${this._data.borders.map(
                          (border) => border
                        )}</p>
                    </div>
                </div>
            </div>
        `;
  }
}

export default new CountryDetialView();
