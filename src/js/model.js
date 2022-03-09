import View from "./View/View.js";
import CountryView from "./View/countryView.js";
import { TIMEOUT_SEC, API } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  country: [],
  countryDetial: [],
  query: "",
};

export const loadCountry = async function () {
  try {
    // const data = await getJSON(`${API}${id}`);
    const data = await getJSON(`${API}all`); 
    
    state.country = data.map((c) => {
      return {
        flag: c.flag,
        name: c.name,
        population: c.population,
        region: c.region,
        capital: c.capital,
      };
    });
    
    // state.country = {
    //   flag: data[0].flag,
    //   name: data[0].name,
    //   population: data[0].population,
    //   region: data[0].region,
    //   capital: data[0].capital,
    // };
  } catch (err) {
    console.error(err);
  }
};

export const loadCountryDetial = async function (id) {
  try {
    const data = await getJSON(`${API}name/${id}`);

    state.countryDetial = {
      flag: data[0].flag,
      name: data[0].name,
      population: data[0].population,
      region: data[0].region,
      capital: data[0].capital,
      nativeName: data[0].nativeName,
      subRegion: data[0].subregion,
      currencies: data[0].currencies[0].name,
      languages: data[0].languages,
      borders: data[0].borders,
      topleveldomain: data[0].topLevelDomain[0],
    };
  } catch (err) {
    console.error(err);
  }
};

