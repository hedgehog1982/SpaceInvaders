let enemyArray = []

let enemyShip = new moveableStaticSprite (
    30,
    100,
    30,
    30,
    '../images/cat.png',
    'myCanvas'
 )
 enemyShip.currentDirection = "right";

setInterval(() => {
    var dx = 10;
    var dy = 10;
    
    if (enemyShip.currentDirection === "left") {
        enemyShip.moveSprite(enemyShip.x - dx, enemyShip.y);
    if (enemyShip.x <= 0) {
       enemyShip.moveSprite(enemyShip.x + dx, enemyShip.y + dy);
        enemyShip.currentDirection = "right";
    }
    }
    if (enemyShip.currentDirection === "right") {
        enemyShip.moveSprite(enemyShip.x + dx, enemyShip.y);
 
    if (enemyShip.x >= 600) {
       enemyShip.moveSprite(enemyShip.x - dx, enemyShip.y + dy);
       enemyShip.currentDirection = "left";
    }
    }
    if (enemyShip.y >= 500) {
        // alert("Game Over!");
    }
 }, 50);