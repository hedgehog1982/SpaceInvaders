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


//move tied to one event?
setInterval(() => {
    moveShip();
    enemyMovement();
    enemyShootInterval()
    dealWithBullets()

}, 20); 


