setInterval(() => {
    console.log('checking bullets');
    bulletArray.forEach((bullet, index) => {
        // check if where it moving is occupied
        

        
        //for every sprite is it on the same x axis
        //see it y is withing the bottom and top of bullet
        //
       // enemyArray.forEach((enemy) =>{
       //     if 
       // });



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
        enemyArray.forEach(enemy => {
            if (bullet.x <= enemy.x && bullet.y <= enemy.y) {
                console.log("a hit")
                bullet.removeSprite();
                bulletArray.splice(index, 1);
                enemy.removeSprite();
                enemyArray.splice(index, 1);
            }

        })
        
    });
}, 100);