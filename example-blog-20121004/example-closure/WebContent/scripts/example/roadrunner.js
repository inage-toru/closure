goog.provide('example.RoadRunner');
goog.require('example.Car');
goog.scope(function() {
  example.RoadRunner = function() { // (2) Constructor
    goog.base(this); // (3) Call super
  };
  goog.inherits(example.RoadRunner, example.Car); // (1) Extend class
  example.RoadRunner.prototype.horn = function() { // (4) Overriden method
    window.alert('Beep! Beep!');
  };
});