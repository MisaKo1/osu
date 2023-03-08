const circle = document.getElementById("circle");
const scoreboard = document.getElementById("scoreboard");
const healthbar = document.getElementById("healthbar");
const bar = document.getElementById("bar");
const place = document.getElementById("place");

let score = 0;
let x = 0;
let y = 0;
let hp = 330;
let hpneg = 10;

play.onclick = () => {
    play.style.display = "none";
    scoreboard.style.display = "block";
    healthbar.style.display = "block";
    bar.style.display = "block";
    place.style.display = "block";
    circle.style.display = "block";
    

    document.body.style.backgroundImage = "url(./res/img/twitchchat.jpg)";
    
}

setInterval(() => {
    ax = place.offsetWidth - 200;
    by = place.offsetHeight - 200;
  }, 0);

function hpminus(){
     let hpsminus = setInterval(() => {
        hp -= hpneg;
        bar.style.width = hp + "px";
        bar.style.transition = "0.1s";
    }, 100);

    let hpsminus2 = setInterval(() => {
        hpneg += 10;
    }, 10000);

    setInterval(() => {
        if (hp > 300){
            health = 300;
        }
    },0 );

    setInterval(() => {
        if (hpneg >= 10){
            clearInterval(hpsminus2)
        }
        if (hp <= 0){
            clearInterval(hpsminus);
            clearInterval(hpsminus2);
            circle.style.opacity = "0";
            circle.style.transition = "2s";
            circle.style.pointerEvents = "none";
            place.style.opacity = "0";
            place.style.transition = "3s";
            bar.style.opacity = "0.5";
            bar.style.transition = "4s";
            scoreboard.style.opacity = "0.5";
            scoreboard.style.transition = "4s";
            health = 100;
        }
    }, 0)
}

function loc() {
    x = circle.style.top = Math.round(Math.random() * by) + "px";
    y = circle.style.left = Math.round(Math.random() * ax) + "px";
    circle.style.opacity = "1";
    circle.style.transition = "0.1s";
}

circle.onclick = () => {
    loc();
    score += 300;
    scoreboard.innerHTML = `${score}`;

    if (hp >= 300) {
        hp = 300;
    }
    else if (hp < 300 && hp >= 200){
        hp = 300;
    }
    else if (hp < 200){
        hp += 100;
    }

}

window.onload = () => {
    hpminus();
    x = circle.style.top = Math.round(Math.random() * by) + "px";
    y = circle.style.left = Math.round(Math.random() * ax) + "px";

    play.style.display = "block";
    scoreboard.style.display = "none";
    healthbar.style.display = "none";
    bar.style.display = "none";
    place.style.display = "none";
    circle.style.display = "none";
  };
