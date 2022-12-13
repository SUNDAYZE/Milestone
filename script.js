//Add a jumping function for kirby in order to avoid the bad guys
var kirby = document.getElementById('kirby');
var enemy = document.getElementById('enemy');
var counter = 0;

function jump() {
    if (kirby.classList == 'animate') { return }
    kirby.classList.add('animate');
    setTimeout(function () {
        kirby.classList.remove('animate');
    }, 300);
}

//Keep score count and gameover popup
var checkDead = setInterval(function () {
    let kirbyTop = parseInt(window.getComputedStyle(kirby).getPropertyValue("top"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    if (enemyLeft < 20 && enemyLeft > -20 && kirbyTop >= 130) {
        enemy.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        enemy.style.animation = "enemy 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);

