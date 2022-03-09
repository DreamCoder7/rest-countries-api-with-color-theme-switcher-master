import { async } from "regenerator-runtime";
import * as model from "./model.js";
import countryView from "./View/countryView.js";
import countryDetialView from "./View/countryDetialView.js";
import searchView from "./View/searchView.js";
import darkModeView from "./View/darkModeView.js";
import countryFilterView from "./View/countryFilterView.js";

const controlCountry = async function () {
  // await model.loadCountry(id);
  await model.loadCountry();

  // render country
  model.state.country.forEach((country) => {
    countryView.render(country);
  });
};

const controlCountryDetial = async function (id) {
  await model.loadCountryDetial(id);

  countryDetialView.render(model.state.countryDetial);
  countryDetialView._toggleWindows();
};

const controlSearch = function (target) {
  const search = model.state.country.filter((country) => {
    return country.name.toLowerCase().includes(target);
  });

  if (search.length > 1) {
    search.map((country) => countryView.render(country));
  } else {
    countryView.render(search);
  }
};

const controlFilter = async function (id) {
  await model.loadCountry();

  model.state.country.forEach((country) => {
    if (country.region === id) {
      countryView.render(country);
    }
  });
};

const init = function () {
  searchView.addHundlerSearchInput(controlSearch);
  countryDetialView.addHundlerCountryDetial(controlCountryDetial);
  countryFilterView.addHundlerFilter(controlFilter);
  controlCountry();
};
init();
// TEMP
/*
const football = async function () {
  const res = await fetch(
    `https://www.scorebat.com/video-api/v3/feed/?token=[MTQwNzlfMTY0NjM3OTY1MF9iM2Y4MGViNGU3ZTNjZGU1ZGRiMTJhNWI1MTk5YmRmMTExMmQ5NmNk]`
  );

  const data = await res.json();
  console.log(data.response[0].videos[0].embed);
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", data.response[0].videos[0].embed);
};

football();
*/
