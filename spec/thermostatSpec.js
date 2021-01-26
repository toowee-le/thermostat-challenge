"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 10 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature by 1", function() {
    thermostat.up();

    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
});