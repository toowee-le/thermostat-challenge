"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 10 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});