
const year = new Date().getFullYear();
const choosenDate = new Date(year, 12, 1).getTime();

let countdown = setInterval(function() {

  const today = new Date().getTime();

  const diff = choosenDate - today;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    "<div class=\"days\"> \
  <div class=\"c-number\">" + days + "</div>hari</div> \
<div class=\"hours\"> \
  <div class=\"c-number\">" + hours + "</div>jam</div> \
<div class=\"minutes\"> \
  <div class=\"c-number\">" + minutes + "</div>menit</div> \
<div class=\"seconds\"> \
  <div class=\"c-number\">" + seconds + "</div>detik</div> \
</div>";

}, 1000);
