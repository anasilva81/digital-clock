let hourEl = document.getElementById("hour");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

function updateClock() {
  let h = new Date().getHours();
  if (h < 10) {
    h = `0${h}`;
  }
  let m = new Date().getMinutes();
  if (m < 10) {
    m = `0${m}`;
  }
  let s = new Date().getSeconds();
  if (s < 10) {
    s = `0${s}`;
  }

  hourEl.innerHTML = h;
  minutesEl.innerHTML = m;
  secondsEl.innerHTML = s;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
