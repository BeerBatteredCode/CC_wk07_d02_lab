const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);

  PubSub.subscribe('SelectView:click', (evt) => {
    const selectedIndex = evt.detail;
    this.publishPlanetDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishPlanetDetail = function(planetIndex){
  const selectedName = this.planets[planetIndex];
 //  for (var i = 0; i < this.planets.length; i++) {
 //   if this.planets[i] == selectedName{
 //     const selectedPlanet = this.planets[i]
 //   };
 // };
  console.log("is it working?", selectedPlanet);

  PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
};

module.exports = SolarSystem;
