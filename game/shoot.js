let bulletSpeed = 4;
let shootCounter = 0;
let shootSpeed = 5

const dealWithBullets = () => {
    //console.log('checking bullets');
    bulletArray.forEach((bullet, index) => {
        //move bullet
        // console.log(bullet)
        bullet.moveSprite(bullet.x, bullet.y - 5);
      
        if (bullet.y <= 105) {
            //remove bullet
            console.log(bullet.y);
            bullet.removeSprite();
            bulletArray.splice(index, 1);
        }

        //update the bullets
        enemyArray.forEach((enemy, enemyIndex) => {
            if (
                enemy.x <= bullet.x + bullet.width &&
                bullet.x <= enemy.x + enemy.width
            ) {
            if (enemy.y <= bullet.y + bullet.height &&
                    bullet.y <= enemy.y + enemy.height) {
                    // needs to check
                    console.log('a hit');
                    var audio = new Audio('../sounds/explosion1.mp3');
                    audio.play();
                    bullet.removeSprite();
                    bulletArray.splice(index, 1);
                    enemy.removeSprite();
                    enemyArray.splice(enemyIndex, 1);
                    hit = true;
                    let explosion = new animatedSprite(
                        enemy.x,
                        enemy.y,
                        enemy.width,
                        enemy.height,
                        64,
                        64,
                        '../images/Explo.png',
                        'explosionCanvas',
                        50,
                        explosionMap
                    );
                    scored();
                }
            }
        });

        buildingArray.forEach((building, buildingIndex) => {
            if (
                building.x <= bullet.x + bullet.width &&
                bullet.x <= building.x + building.width
            ) {
                if (building.y <= bullet.y + bullet.height &&
                    bullet.y <= building.y + building.height) {
                    // needs to check
                    console.log('a hit');
                    var audio = new Audio('../sounds/explosion1.mp3');
                    let explosion = new animatedSprite(
                        bullet.x,
                        bullet.y - 15,
                        20,  //smaller explosions for wall?
                        20,
                        64,
                        64,
                        '../images/Explo.png',
                        'explosionCanvas',
                        50,
                        explosionMap
                    );
                    audio.play();
                    bullet.removeSprite();
                    bulletArray.splice(index, 1);
                    building.hitSquare();
                    if (building.destroyLimit <= 0) {
                        buildingArray.splice(buildingIndex, 1);
                    }
                }
            }
        });
    });

    hit = false;
}

setInterval(() => {

    enemyBullets.forEach((bullet, index) => {
        //move bullet
        // console.log(bullet)
        bullet.moveSprite(bullet.x, bullet.y + bulletSpeed);

        // is it hitting a building
        buildingArray.forEach((building, buildingIndex) => {
            if (
                building.x <= bullet.x + bullet.width &&
                bullet.x <= building.x + building.width
            ) {
                if (
                    building.y <= bullet.y + bullet.height &&
                    bullet.y <= building.y + building.height
                ) {
                    // needs to check
                    console.log('a hit');
                    var audio = new Audio('../sounds/explosion1.mp3');
                    //explosion?
                    let explosion = new animatedSprite(
                        bullet.x,
                        bullet.y + 15,
                        20,  //smaller explosions for wall?
                        20,
                        64,
                        64,
                        '../images/Explo.png',
                        'explosionCanvas',
                        50,
                        explosionMap
                    );


                    //audio.play();
                    bullet.removeSprite();
                    enemyBullets[index] = '';
                    building.hitSquare();
                    if (building.destroyLimit <= 0) {
                        buildingArray.splice(buildingIndex, 1);
                    }
                }
            }
            if (bullet.y >= 700) {
                bullet.removeSprite();
                enemyBullets[index] = '';
            }
        });
        if (
            spaceShip.x <= bullet.x + bullet.width &&
            bullet.x <= spaceShip.x + spaceShip.width
        ) {
            if (
                spaceShip.y <= bullet.y + bullet.height &&
                bullet.y <= spaceShip.y + spaceShip.height
            ) {
                console.log('spaceship hit');
                var audio = new Audio('../sounds/explosion1.mp3');

                let shield = new animatedSprite(
                    spaceShip.x - 57,
                    spaceShip.y - 40,
                    180,
                    180,
                    192,
                    192,
                    '../images/shield.png',
                    'explosionCanvas',
                    20,
                    shieldMap
                );
                audio.play();
                bullet.removeSprite();
                enemyBullets[index] = '';
                spaceShip.removeSprite();
                spaceShipHit = true;
                spaceShip.displaySprite();
                
                removeHearts();
                
                
            }
        }
    });
    enemyBullets = enemyBullets.filter(enemyBullets => {
        return enemyBullets !== '';
    });

    spaceShipHit = false;
}, 30);

const lowestSprites = () => {
    let uniqueX = [];
    let uniqueY = [];
    //get all x values
    enemyArray.slice(0).forEach(enemy => {
        if (uniqueX.indexOf(enemy.x) === -1) {
            //if not contained in index push new values
            uniqueX.push(enemy.x);
            uniqueY.push(enemy.y);
        } else {
            //x exists and we have its array
            //find current X in X index and finding corresponding Y
            let indexOfXValue = uniqueX.indexOf(enemy.x);
            if (uniqueY[indexOfXValue] < enemy.y) {
                //corresponding Y value is more than replace
                uniqueY[indexOfXValue] = enemy.y;
            }
        }
    });
    var audio = new Audio('../sounds/laser1.mp3');
    let random = Math.floor(Math.random() * uniqueX.length);
    audio.play();
    enemyBullets.push(
        new moveableStaticSprite(
            uniqueX[random] + 10,
            uniqueY[random] + 40,
            25,
            25,
            '../images/laser.png',
            'myCanvas'
        )
    );
};

let enemyShootInterval = () => {
    if (shootCounter % shootSpeed === 0){ //shoot every 20 frames
        lowestSprites();
    }
    shootCounter ++ 
}
