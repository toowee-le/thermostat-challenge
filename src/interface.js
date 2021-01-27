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
    $('.psm-off').css('background', '#A8E1B2');
    $('.psm-off').css('border', '1px solid #A8E1B2');
    $('.psm-on').css('background', '#FFF');
    $('.psm-on').css('border', '1px solid #FFF');
  });

  $('.psm-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('.psm-status').text('on');
    $('.psm-on').css('background', '#A8E1B2');
    $('.psm-on').css('border', '1px solid #A8E1B2');
    $('.psm-off').css('background', '#FFF');
    $('.psm-off').css('border', '1px solid #FFF');

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