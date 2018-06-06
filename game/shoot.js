let bulletSpeed = 4

setInterval(() => {
    //console.log('checking bullets');
    bulletArray.forEach((bullet, index) => {
        //move bullet
        // console.log(bullet)
        bullet.moveSprite(bullet.x, bullet.y - 5);
        console.log(bullet.y);
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
                if (bullet.y <= enemy.y + enemy.height - 5) {
                    // needs to check
                    console.log('a hit');
                    var audio = new Audio('../sounds/explosion1.mp3');
                    audio.play();
                    bullet.removeSprite();
                    bulletArray.splice(index, 1);
                    enemy.removeSprite();
                    enemyArray.splice(enemyIndex, 1);
                    hit = true;
                    scored();
                }
            }
        });

        buildingArray.forEach((building, buildingIndex) => {
            if (
                building.x <= bullet.x + bullet.width &&
                bullet.x <= building.x + building.width
            ) {
                if (bullet.y <= building.y + building.height) {
                    // needs to check
                    console.log('a hit');
                    var audio = new Audio('../sounds/explosion1.mp3');
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
}, 20);

setInterval(() => {
    // make a blank array
    console.log(enemyBullets.length);
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
                    //audio.play();
                    bullet.removeSprite();
                    enemyBullets[index] = "";
                    building.hitSquare();
                    if (building.destroyLimit <= 0) {
                        buildingArray.splice(buildingIndex, 1);
                    }
                }
            }
            if (bullet.y >= 700){
                bullet.removeSprite();
                enemyBullets[index] = "";
                }

        });
       
    });
    enemyBullets = enemyBullets.filter((enemyBullets) => {return enemyBullets !== ""})
   

}, 100);

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


setInterval(() => {
    lowestSprites();
}, 500);




