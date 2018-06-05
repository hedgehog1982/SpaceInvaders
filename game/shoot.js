setInterval(() => {
    //console.log('checking bullets');
    bulletArray.forEach((bullet, index) => {
        //move bullet

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
                }
                }

                })

        })
        
    }
, 20);