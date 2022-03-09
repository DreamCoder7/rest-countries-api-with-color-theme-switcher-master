import View from "./View.js";

class CountryDetialView extends View {
  _parentElement = document.querySelector(".country__detial--container");
  _countryContainer = document.querySelector(".country__container");
  _countryEl = document.querySelector(".country");

  _countryDetialContainer = document.querySelector(
    ".country__detial--container"
  );
  _countryDetial = document.querySelector(".country__detial");
  _btnContainer = document.querySelector(".main__nav--back");
  _searchContainer = document.querySelector(".main__nav--search");
  _backBtn = document.querySelector(".back__btn");
  _options = document.querySelector(".main__nav--filter");
  _main = document.querySelector(".main");

  constructor() {
    super();
    this._backBtn.addEventListener("click", this._addHundlerBackBtn.bind(this));
  }

  _clearCountryDetial() {
    this._parentElement.innerHTML = "";
  }

  _toggleWindows() {
    this._countryDetialContainer.classList.toggle("hidden");
    this._btnContainer.classList.toggle("hidden");
    this._options.classList.toggle("hidden");
    this._searchContainer.classList.toggle("hidden");
    this._countryContainer.classList.toggle("hidden");
  }

  _addHundlerBackBtn() {
    this._toggleWindows();
    this._clearCountryDetial();
  }

  addHundlerCountryDetial(hundler) {
    this._countryContainer.addEventListener("click", function (e) {
      const countryEl = e.target.closest(".country");
      if (!countryEl) return;
      // const country = document.querySelectorAll(".country__name");
      const country = countryEl.querySelector(".country__name");
      hundler(country.textContent);
    });
  }

  _generateMarkup() {
    return `
      <div class="country__detial">
        <img class="country__img" src="${this._data.flag}" alt="${
      this._data.name
    }" />
        <div class="country__data">
            <h3 class="country__name">${this._data.name}</h3>
            <div class="country__info">
              <p class="country__row"><span>Native Name: </span>${
                this._data.nativeName
              }</p>
              <p class="country__row"><span>Population: </span>${(
                this._data.population / 1000000
              ).toFixed(1)}M</p>
              <p class="country__row"><span>Region: </span>${
                this._data.region
              }</p>
              <p class="country__row"><span>Sub Region: </span>${
                this._data.subRegion
              }</p>
              <p class="country__row"><span>Capital: </span>${
                this._data.capital
              }</p>
              <p class="country__row"><span>Top Level Domain: </span>${
                this._data.topleveldomain
              }</p>
              <p class="country__row"><span>Currencies: </span>${
                this._data.currencies
              }</p>
              <p class="country__row">
                <span>Languages: </span>${this._data.languages.map(
                  (lng) => lng.name
                )}.
              </p>
            </div>
            <div class="borders">
            <span>Border Countries: </span>
              <p class="country__row borders__cont">
                ${this._data.borders
                  .map(
                    (border) =>
                      `<span class="country__borders"> ${border} </span>`
                  )
                  .join(" ")}
              </p>
            </div>
          </div>
      </div>
  `;
  }
}

export default new CountryDetialView();
