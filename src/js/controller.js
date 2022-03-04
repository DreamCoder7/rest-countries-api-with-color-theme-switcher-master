import { async } from "regenerator-runtime";
import * as model from "./model.js";
import countryView from "./View/countryView.js";
import searchView from "./View/searchView.js";
import darkModeView from "./View/darkModeView.js";
import countryDetialView from "./View/countryDetialView.js";

const controlCountry = async function (id) {
  await model.loadCountry(id);

  countryView.render(model.state.country);
  console.log(model.state.country);
};

const controlCountryDetial = async function () {
  await model.loadCountryDetial(searchView.getQuery());

  countryDetialView.render(model.state.countryDetial);
};

const init = function () {
  searchView.addHundlerSearchInput(controlCountry);
  countryDetialView.addHundlerCountryDetial(controlCountryDetial);
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
