"use strict";

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MIN_TEMPERATURE = 10;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  isMinimumTemperature() {
    return this.temperature === this.MIN_TEMPERATURE;
  };

  up() {
    this.temperature += 1;
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature -= 1;
    }
  };
};