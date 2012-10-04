goog.provide('example.Car');
goog.scope(function() {
  example.Car = function() {}; // (1) Constructor
  example.Car.prototype.horn = goog.abstractMethod; // (2) Abstract method
  example.Car.prototype.gas = function() { // (3) Instance method
    console.log('Speed up.');
  };
  example.Car.prototype.brake = function() { // (4) Instance method
    console.log('Slow down.');
  };
});