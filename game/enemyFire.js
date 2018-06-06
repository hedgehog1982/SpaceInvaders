
setTimeout(() => {
    enemyBullets.forEach((enemyBullets)=>{
            if (enemyBullets.length < 1) {
                var audio = new Audio('../sounds/laser1.mp3');
                audio.play();
                enemyBullets.push(
                    new moveableStaticSprite(
                        this.x + this.height / 2 - 10,
                        this.y + 20,
                        25,
                        25 ,
                        '../images/taco.png',
                        'myCanvas'
                    )
                );
            };
        });
    }, 100); 


