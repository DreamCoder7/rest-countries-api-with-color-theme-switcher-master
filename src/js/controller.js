import { async } from "regenerator-runtime";
import * as model from "./model.js";
import countryView from "./View/countryView.js";
// import searchView from "./View/searchView.js";

const controlCountry = async function () {
  await model.loadCountry();

  countryView.render(model.state.country);
  console.log(model.state.country);
};

controlCountry();

const init = function () {
  searchView.addHundlerSearch();
};
// init();
