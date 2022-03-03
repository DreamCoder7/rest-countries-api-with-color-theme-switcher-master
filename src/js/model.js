import View from "./View/View.js";
import CountryView from "./View/countryView.js";
import { TIMEOUT_SEC, API } from "./config.js";
import { getJSON } from "./helper.js";
// import searchView from "./View/searchView.js";

export const state = {
  country: [],
};

export const loadCountry = async function () {
  try {
    const data = await getJSON(`${API}usa`);

    state.country = {
      flag: data[0].flag,
      name: data[0].name,
      population: data[0].population,
      region: data[0].region,
      capital: data[0].capital,
    };
  } catch (err) {
    console.error(err);
  }
};

export const loadSearchResult = function (id) {};
// loadCountry();
