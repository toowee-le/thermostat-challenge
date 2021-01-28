# Thermostat Challenge
Makers Week 5 challenge. Test drive a web application using Jasmine to build a simple thermostat that allows the user to set the temperature.


## Demo
![Thermostat Demo](demo.gif)

## Functionalities
* User can increase the temperature
* User can decrease the temperature
* User can reset the temperature
* User can switch power saving mode on and off
* User can select pre-defined cities to check the current temperature of the selected location

## Logic
* Thermostat starts at 20 degrees by default
* The minimum temperature is 10 degrees
* Power saving mode is on by default
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Display's the current energy usage as follow:
  - low-usage: < 18 degrees
  - medium-usage: 18 - 25 degrees
  - high-usage: > 25 degrees

## Tech/framework used:
- Backend:
  - JavaScript:
    - [Jasmine](https://jasmine.github.io/)
    - [jQuery](https://jquery.com/)
- Frontend:
  - HTML
  -[Sass/SCSS](https://sass-lang.com/)
- API:
  - [OpenWeatherMapAPI](https://openweathermap.org/current)

## How to use
```
git clone https://github.com/toowee-le/thermostat-challenge.git
open SpecRunner.html
```