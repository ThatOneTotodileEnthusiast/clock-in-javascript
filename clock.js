var secondsHand = document.querySelector(".seconds");
var clockTimer = document.querySelector("#timer");
var time = 180;
var timeOffset = 180;

function clockLoop() {
  if (time === 540) {
    time = 180;
    secondsHand.style.transform = `rotate(${time + 0.1875}deg)`;
  }
  else {
    secondsHand.style.transform = `rotate(${time + 0.1875}deg)`;
  }
  time += 0.1875;

  if (time % 6 === 0) {
    clockTimer.innerHTML = (time-timeOffset)/6;
  }
  
}

setInterval(clockLoop, 31.25)