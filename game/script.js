let bulletArray = []; //store array of bullets ......
let enemyBullets = []



let spaceShip = new controllableStaticSprite(
    350,
    621,
    70,
    70,
    '../images/Spaceship.png',
    'myCanvas',
    'ArrowLeft',
    'ArrowRight'
);

invaderBuilder(150, 100,40, 40);

let mainTimer

const startGame = () => {
  //move tied to one event?
  let elem = document.getElementById('play');
  elem.parentNode.removeChild(elem);

         mainTimer = setInterval(() => {
            moveShip();
            enemyMovement();
            enemyShootInterval()
            dealWithBullets()
            dealWithEnemyBullets()

        }, 20); 

  }







