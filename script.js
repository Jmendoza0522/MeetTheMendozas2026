// script.js

const countdown = document.getElementById("countdown");
const weddingDate = new Date("2026-11-12T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "<h3>We're married!</h3>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `
    <h3>Countdown to Our Big Day</h3>
    <p>${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec</p>
  `;
}

setInterval(updateCountdown, 1000);
