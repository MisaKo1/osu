const circle = document.getElementById("circle");
const scoreboard = document.getElementById("scoreboard");
const healthbar = document.getElementById("healthbar");
const bar = document.getElementById("bar");
const place = document.getElementById("place");
const dance = document.getElementById("dance");
const dance2 = document.getElementById("dance2");
const song = document.getElementById("song");

let score = 0;
let x = 0;
let y = 0;
let hp = 300;
let hpneg = 10;
let ch = 0;
let endspam = 0;

setInterval(() => {
  ax = place.offsetWidth - 200;
  by = place.offsetHeight - 200;
}, 1);

function hpminus() {
  hp -= hpneg;
  bar.style.width = hp + "px";
  bar.style.transition = "0.1s";
}
let hpsminus = setInterval(hpminus, 100);

function hpdiff() {
  hpneg += 10;
}
let hpsminus2 = setInterval(hpdiff, 10000);

function end() {
  if (hpneg >= 10) {
    clearInterval(hpsminus2);
  }
  if (hp <= 0) {
    clearInterval(hpsminus);
    clearInterval(hpsminus2);
    health = 100;

    
    play.style.display = "block";
    scoreboard.style.display = "none";
    healthbar.style.display = "none";
    bar.style.display = "none";
    place.style.display = "none";
    circle.style.display = "none";
    hpminus();
    document.body.style.background = "url(../res/img/twitch.jpg)";
    ch++;
    console.log(ch)
    dance.style.display = "none";
    dance2.style.display = "none";
    song.pause()
  }
}
let endgame = setInterval(end, 1);

function loc() {
  x = circle.style.top = Math.round(Math.random() * by) + "px";
  y = circle.style.left = Math.round(Math.random() * ax) + "px";
  circle.style.opacity = "1";
  circle.style.transition = "0.1s";
}

window.onload = () => {
  x = circle.style.top = Math.round(Math.random() * by) + "px";
  y = circle.style.left = Math.round(Math.random() * ax) + "px";

  play.style.display = "block";
  scoreboard.style.display = "none";
  healthbar.style.display = "none";
  bar.style.display = "none";
  place.style.display = "none";
  circle.style.display = "none";
};

play.onclick = () => {
  song.play();
  song.volume = 0.2;

  play.style.display = "none";
  scoreboard.style.display = "block";
  healthbar.style.display = "block";
  bar.style.display = "block";
  place.style.display = "block";
  circle.style.display = "block";
  hp = 300;
  bar.style.width = hp + "px";

  document.body.style.backgroundImage = "url(./res/img/twitchchat.jpg)";
  if (ch >= 1) {
    hpsminus = setInterval(hpminus, 100);
    hpsminus2 = setInterval(hpdiff, 10000);
    endgame = setInterval(end, 1);

  }
  score = 0;
  scoreboard.innerHTML = `${score}`;
  dance.style.display = "block";
  dance2.style.display = "block";
};
circle.onclick = () => {
  loc();
  score += 300;
  scoreboard.innerHTML = `${score}`;

  if (hp >= 300) {
    hp = 300;
  } else if (hp < 300 && hp >= 200) {
    hp = 300;
  } else if (hp < 200) {
    hp += 100;
  }
};
