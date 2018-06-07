let bulletArray = []; //store array of bullets ......
let enemyBullets = []



let spaceShip = new controllableStaticSprite(
    350,
    621,
    70,
    70,
    '../images/Spaceship.png',
    'myCanvas',
    3,
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
            if (enemyArray.length === 0){
                enemyArray.push(new moveableStaticSprite(
                    -350,  //x
                    100 ,  //y
                    200,
                    200,
                    '../images/enemy.png',
                    'myCanvas',
                    3
                ))
                shootSpeed = 10

            }

            moveShip();
            enemyMovement();
            enemyShootInterval()
            dealWithBullets()
            dealWithEnemyBullets()

        }, 20); 

  }







