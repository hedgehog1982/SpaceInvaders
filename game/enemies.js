

let currentDirection = 'right';
let enemyUpdateSpeed = 20
var dy = 3;    // tie this value to enemyArray.length
var dx = 2;

let enemyMovementInterval = setInterval(() => { //need to stop when hearts is zero


    let needToChange = false;
    //move all
    enemyArray.forEach(enemyShip => {
        if (currentDirection === 'left') {
            enemyShip.moveSprite(enemyShip.x - dx, enemyShip.y);
            if (enemyShip.x <= 20) {
                needToChange = true;
            }
        }
        if (currentDirection === 'right') {
            enemyShip.moveSprite(enemyShip.x + dx, enemyShip.y);
            if (enemyShip.x >= 700 - enemyShip.width) {
                needToChange = true;
            }
        }
        /*if (enemyShip.y >= 400) {
            alert("Game Over!");
        } */ 
    });
    enemyArray.forEach(enemyShip => {
        // if need to change is true move them all down
        if (needToChange === true) {
            // move down
            enemyShip.moveSprite(enemyShip.x - dx, enemyShip.y + dy);
        }
    });

    if (needToChange === true) {
        dx += 0.1
        console.log()
        if (currentDirection === 'left') {
            currentDirection = 'right';
        } else {
            currentDirection = 'left';
        }
    }

   
}, enemyUpdateSpeed);



