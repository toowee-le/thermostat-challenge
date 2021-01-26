"use strict";

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MIN_TEMPERATURE = 10;
    this.psm = true;
    this.PSM_MAX_TEMPERATURE = 25;
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
    return this.temperature === this.PSM_MAX_TEMPERATURE;
  }

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
    }
  };
};