class staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas) {
        this.displaySprite = this.displaySprite.bind(this);
        this.removeSprite = this.removeSprite.bind(this);
        let newImage = new Image();
        newImage.onload = () => {
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
    }
    removeSprite() {
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height);
    }

    displaySprite() {
        console.log('drawing');
        this.targetCanvas.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

class moveableStaticSprite extends staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas) {
        super(x, y, width, height, imageLink, targetCanvas);
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
        leftKey,
        rightKey
    ) {
        super(x, y, width, height, imageLink, targetCanvas);
        this.moveKeySprite = this.moveKeySprite.bind(this);
        this.moveSprite = this.moveSprite.bind(this);
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        document.addEventListener(
            'keydown',
            () => this.moveKeySprite(event),
            false
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
            //stop sprite going over the edge
            if (this.x >= 10) {
                this.moveSprite(this.x - 10, this.y);
            }
        } else if (event.key === this.rightKey) {
            if (this.x <= 700 - this.width - 10) {
                //take into account the width of ship when going left
                this.moveSprite(this.x + 10, this.y);
            }
        } else if (event.code === 'Space') {
            console.log('New bullet');
            if (bulletArray.length < 1) {
                bulletArray.push(
                    new moveableStaticSprite(
                        this.x + this.width / 2 - 10,
                        this.y,
                        20,
                        20,
                        '../images/cat.png',
                        'myCanvas'
                    )
                );
            }
        }
    }
}
