import { async } from "regenerator-runtime";
import * as model from "./model.js";
import countryView from "./View/countryView.js";
import countryDetialView from "./View/countryDetialView.js";
import searchView from "./View/searchView.js";
import darkModeView from "./View/darkModeView.js";
import countryFilterView from "./View/countryFilterView.js";

const controlCountry = async function (id) {
  await model.loadCountry(id);

  // console.log(searchView.getQuery());

  countryView.render(model.state.country);
};

const controlCountryDetial = async function (id) {
  await model.loadCountryDetial(id);

  countryDetialView.render(model.state.countryDetial);
  countryDetialView._toggleWindows();
};

const controlCountryFilter = function (region) {
  const country = document.querySelectorAll(".country__region");

  country.forEach((c) => {
    if (c.childNodes[1].textContent === region) {
      const countryEl = c.closest(".country");
      countryEl.style.gridRow = 1;
      
    } else {
      console.log("Not Found!");
    }
  });
};

const init = function () {
  searchView.addHundlerSearchInput(controlCountry);
  countryDetialView.addHundlerCountryDetial(controlCountryDetial);
  countryFilterView.addHundlerFilter(controlCountryFilter);
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
