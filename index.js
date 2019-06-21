
// Set the date we're counting down to
var countDownDate = new Date("Aug 3, 2019 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var today = new Date();
  var now = today.getTime();
  var timezone = today.getTimezoneOffset()*60000
  now = now + timezone

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("count_down").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count_down").innerHTML = "EXPIRED";
  }
}, 1000);
