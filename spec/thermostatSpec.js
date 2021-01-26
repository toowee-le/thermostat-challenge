"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases in temperature by 1", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases in temperature by 1", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("set minimum temperature at 10 degrees", function() {
    for(let i = 0; i < 10; i++) {
      thermostat.down();
    };

    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  describe("power saving mode", function() {
    it("sets power saving mode on by default", function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it("switches power saving mode off", function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it("switches power saving mode back on", function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });
});