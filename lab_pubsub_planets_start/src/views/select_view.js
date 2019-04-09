const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:all-planets-ready', (evt) => {
    const allPlanets = evt.detail;
    console.log("all planets ready", allPlanets);
  });

  this.element.addEventListener('click', (evt) => {
    const selectedIndex = evt.target.id;
    PubSub.publish('SelectView:click', selectedIndex);
    console.log("hey, check this out", selectedIndex);
  });
};

module.exports = SelectView;
