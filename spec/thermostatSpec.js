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

  describe("set max temperature", function() {
    it("sets max temperature at 25 degrees if PSM is on", function() {
      for(let i = 0; i < 5; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it("sets max temperature at 32 degrees if PSM is off", function() {
      thermostat.switchPowerSavingModeOff();
      for(let i = 0; i < 12; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe("reset temperature", function() {
    it("resets temperature to 20 degrees", function() {
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("display energy usage", function() {
    it("returns 'low-usage' if temperature is below 18 degrees", function() {
      for (let i = 0; i < 3; i ++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it("returns 'medium-usage' if temperature is between 18 and 25 degrees", function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it("returns 'high-usage' if temperature is above 25 degrees", function() {
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});