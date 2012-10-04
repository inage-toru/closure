goog.provide('example.App');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('example.RoadRunner');
goog.scope(function() {
  example.App = function () {
    goog.events.listen(
      goog.dom.getElement('myButton'),
      goog.events.EventType.CLICK,
      this.myButton_clickHandler
    ); // (1) Add event listener
  };
  example.App.prototype.myButton_clickHandler = function(event) { // (2) Event handler
    var car = new example.RoadRunner();
    car.gas();
    car.brake();
    car.horn();
  };
});