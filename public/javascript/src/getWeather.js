$(document).ready(function() {
  $('#current-city').change(function() {
    let city = $('#current-city').val();
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d11d5d06fde9eec74cf187fb75aaca2`, function(data) {
      let kelvin = data.main.temp;
      let celcius = kelvin - 273.15;
      $('#current-temperature').text(Math.floor(celcius) + "℃");
    });
  });
});