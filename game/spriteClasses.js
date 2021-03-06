class staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas, lives) {
        this.displaySprite = this.displaySprite.bind(this);
        this.removeSprite = this.removeSprite.bind(this);
        this.loaded = 0
        let newImage = new Image();
        newImage.onload = () => {
            this.loaded = 1
            this.image = newImage;
            this.displaySprite();
        };
        newImage.src = imageLink;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.targetCanvas = document
            .getElementById(targetCanvas)
            .getContext('2d');
        this.lives = lives === undefined ? 1 : lives; 
    }
    removeSprite() {
        //explosion image
        this.lives--
        console.log("lives ", this.lives)
        if (this.lives <= 0){
            this.targetCanvas.clearRect(this.x, this.y, this.width, this.height);
        }

    }

    displaySprite() {
        if (this.loaded === 1){
            this.targetCanvas.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            );

        }

    }
}

class moveableStaticSprite extends staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas, lives) {
        super(x, y, width, height, imageLink, targetCanvas,lives);
        this.currentDirection = "none"
        this.moveSprite = this.moveSprite.bind(this);
    }

    moveSprite(newX, newY) {
        //clear previous space
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height);
        //update new location
        this.x = newX;
        this.y = newY;
        //render
        super.displaySprite();
    }
}

class controllableStaticSprite extends staticSprite {
    constructor(
        x,
        y,
        width,
        height,
        imageLink,
        targetCanvas,
        lives,
        leftKey,
        rightKey
    ) {
        super(x, y, width, height, imageLink, targetCanvas,lives);
        this.moveKeySprite = this.moveKeySprite.bind(this);
        this.moveSprite = this.moveSprite.bind(this);
        this.leftKey = leftKey;
        this.rightKey = rightKey;

        document.addEventListener(
            'keydown',
            () => this.moveKeySprite(event),
            false
        );
        document.addEventListener(
            'keyup',
            () => {this.currentDirection = "none"}
        );
    }

    //had to duplicate this for moment
    moveSprite(newX, newY) {
        //clear previous space
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height);
        //update new location
        this.x = newX;
        this.y = newY;
        //render
        super.displaySprite();
    }

    moveKeySprite(event) {
        console.log(event);
        if (event.key === this.leftKey) {
            this.currentDirection = "left"
        } else if (event.key === this.rightKey) {
            this.currentDirection = "right"

            //space is shoot
        } else if (event.code === 'Space' && hearts !== 0) {
            console.log('New bullet');
            if (bulletArray.length < 1) {
                var audio = new Audio('../sounds/laser1.mp3');
                audio.play();
                bulletArray.push(
                    new moveableStaticSprite(
                        this.x + this.width / 2 - 10,
                        this.y - 20,
                        25,
                        25 ,
                        '../images/laser.png',
                        'myCanvas'
                    )
                );
            }
        }
    }
}

