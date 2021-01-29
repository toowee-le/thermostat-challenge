$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);

  $('.temp-up').on('click', function() {
    thermostat.up();
    updateTemperature()
  });

  $('.temp-down').on('click', function() {
    thermostat.down();
    updateTemperature()
  });

  $('.temp-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature()
  });

  $('.psm-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('button.psm-off').toggleClass("green");
    $('button.psm-on').removeClass("green");
  });

  $('.psm-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('button.psm-on').toggleClass("green");
    $('button.psm-off').removeClass("green");
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === "low-usage") {
      $('.current-usage').css('color', '#A8E1B2');
      $('.current-usage').text('low usage');
    } else if (thermostat.energyUsage() === "medium-usage") {
      $('.current-usage').css('color', 'black');
      $('.current-usage').text('medium usage');
    } else {
      $('.current-usage').css('color', 'red');
      $('.current-usage').text('high usage');
    }
  };
});