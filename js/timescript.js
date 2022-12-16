const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const min = document.querySelectorAll("min");
const sec = document.querySelectorAll("sec");
const currentTime = new Date().getFullYear();
const endTime = new Date(`Janury 1 ${currentTime + 1} 00:00:00`);

function countDown() {
  const time = new Date();
  const diff = endTime - time;
  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const min = Math.floor(diff / 1000 / 60) % 60;
  const sec = Math.floor(diff / 1000) % 60;

  document.getElementById("days").innerHTML = day;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}
setInterval(countDown, 1000);
