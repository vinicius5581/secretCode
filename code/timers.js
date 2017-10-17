function simpleMessage() {
  alert("This is just a simple alert");
}

// set time out
window.setTimeout(simpleMessage, 5000);

// if you wanted to clear the timer.
var timer = window.setTimeout(simpleMessage, 5000);
window.clearTimeout(timer);

// set interval. will repeat every  5000ms
window.setInterval(simpleMessage, 5000);

// if you wanted to clear the intervals.
var intervalHandler = window.setInterval(simpleMessage, 5000);
window.clearInterval(intervalHandle);
