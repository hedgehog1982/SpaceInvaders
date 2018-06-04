setInterval(() => {
    console.log('checking bullets');
    bulletArray.forEach((bullet, index) => {



        //move bullet
        //update the bullets
        bullet.moveSprite(bullet.x, bullet.y - 10);
        console.log(bullet.y);
        if (bullet.y <= 110) {
            //remove bullet
            console.log(bullet.y);
            bullet.removeSprite();
            bulletArray.splice(index, 1);
            
        }
        enemyArray.forEach((enemy,enemyIndex) => {
            if (bullet.x <= enemy.x + enemy.width - 8  && bullet.y <= enemy.y + enemy.height - 8 ) {
                if (bullet.y)
                console.log("a hit")
                bullet.removeSprite();
                bulletArray.splice(index, 1);
                enemy.removeSprite();
                enemyArray.splice(enemyIndex, 1);
            }

        })
        
    });
}, 50);