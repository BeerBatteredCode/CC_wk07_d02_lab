const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectPlanet = document.querySelector('nav#planets-selector');
  const planetLink = new SelectView(selectPlanet);
  planetLink.bindEvents();

  const planetView = document.querySelector('section#info-div');

  const planetInfoDisplay = new PlanetInfoView(planetView);
  console.log(planetInfoDisplay);
  planetInfoDisplay.bindEvents();

  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();
});
