setInterval(() => {
    console.log('checking bullets');
    bulletArray.forEach((bullet, index) => {
        //move bullet

        bullet.moveSprite(bullet.x, bullet.y - 10);
        console.log(bullet.y);
        if (bullet.y <= 110) {
            //remove bullet
            console.log(bullet.y);
            bullet.removeSprite();
            bulletArray.splice(index, 1);
            
        }

        //update the bullets
            enemyArray.forEach((enemy,enemyIndex) => {
                if ( enemy.x <= bullet.x  && bullet.x <= enemy.x + enemy.width  ) {
                if (bullet.y <= enemy.y){  // needs to check
                        console.log("a hit")
                        bullet.removeSprite();
                        bulletArray.splice(index, 1);
                        enemy.removeSprite();
                        enemyArray.splice(enemyIndex, 1)
                }
                }

                })

        })
        
    }
, 50);