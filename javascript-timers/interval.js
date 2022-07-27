var countdownDisplay = document.querySelector('.countdown-display');
var count = 3;
var intervalID = setInterval(countdown, 1000);
function countdown() {
  if (count > 0) {
    countdownDisplay.textContent = count;
    count--;
  } else {
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
