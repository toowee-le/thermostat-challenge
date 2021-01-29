"use strict";

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MIN_TEMPERATURE = 10;
    this.psm = true;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.LOW_ENERGY_LIMIT = 18;
    this.MED_ENERGY_LIMIT = 25;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  isPowerSavingModeOn() {
    return this.psm === true;
  }

  switchPowerSavingModeOff() {
    return this.psm = false;
  }

  switchPowerSavingModeOn() {
    return this.psm = true;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    } else {
      return this.temperature === this.MAX_TEMP_PSM_ON;
    };
  };

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  };

  up() {
    if (this.isMaximumTemperature()) {
      return;
    } else {
      this.temperature += 1;
    };
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature -= 1;
    };
  };

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  energyUsage() {
    if (this.temperature < this.LOW_ENERGY_LIMIT) {
      return "low-usage";
    } else if (this.temperature <= this.MED_ENERGY_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  };
};