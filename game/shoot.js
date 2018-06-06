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
            enemyArray.forEach((enemy,enemyIndex) => {
                if ( enemy.x <= bullet.x + bullet.width  && bullet.x <= enemy.x + enemy.width  ) {
                if (bullet.y <= enemy.y + enemy.height - 5){  // needs to check
                        console.log("a hit")
                        var audio = new Audio('../sounds/explosion1.mp3');
                        audio.play();
                        bullet.removeSprite();
                        bulletArray.splice(index, 1);
                        enemy.removeSprite();
                        enemyArray.splice(enemyIndex, 1)
                        hit = true;
                        scored();
                }
                }

                })

                buildingArray.forEach((building,buildingIndex) => {
                    if (building.x <= bullet.x + bullet.width  && bullet.x <= building.x + building.width  ) {
                    if (bullet.y <= building.y + building.height ){  // needs to check
                            console.log("a hit")
                            var audio = new Audio('../sounds/explosion1.mp3');
                            audio.play();
                            bullet.removeSprite();
                            bulletArray.splice(index, 1);
                            building.hitSquare();
                            if (building.destroyLimit <= 0){
                                buildingArray.splice(buildingIndex, 1)
                            }

                    }
                    }
    
                    })

        })
        lowestSprites()
        hit = false; 
    }
, 20);

setInterval(() => {
    
enemyBullets.forEach((bullet, bulletIndex) => {
    //move bullet
   // console.log(bullet)
    enemyBullets.moveSprite(bullet.x, bullet.y + 5);
    console.log(bullet.y);
    if (enemyBullets.y <= 700) {
        //remove bullet
        console.log(bullet.y);
        enemyBullets.removeSprite();
        enemyBullets.splice(bulletIndex, 1);
        
    }
})
}, 20);


const lowestSprites = () => {
    let uniqueX = []
    let uniqueY = []
    //get all x values 
    enemyArray.forEach(enemy => {
        if (uniqueX.indexOf(enemy.x) === -1){ //if not contained in index push new values
            uniqueX.push(enemy.x)
            uniqueY.push(enemy.y)
        } else {  //x exists and we have its array 
            //find current X in X index and finding corresponding Y
            let indexOfXValue = uniqueX.indexOf(enemy.x)
            if (uniqueY[indexOfXValue] < enemy.y) { //corresponding Y value is more than replace
                uniqueY[indexOfXValue] = enemy.y
            }
        }

    })
    console.log("start of values")
    console.log(uniqueX)
    console.log(uniqueY)

}

