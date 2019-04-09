const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    this.collate(planet);
    console.log("Hello, planets working", planet);
  });
};

PlanetInfoView.prototype.collate = function(planet){
  const infoDiv = document.createElement('div');
  infoDiv.textContent = `This is working`;
  this.container.appendChild(infoDiv);
  console.log(planet);
};

module.exports = PlanetInfoView;
