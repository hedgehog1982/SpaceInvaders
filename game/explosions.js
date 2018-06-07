let explosionMap = [0, 0 , 64 , 0, 128 , 0, 192 ,0,
                    0, 64 , 64 , 64, 128 , 64, 192 ,64,
                    0, 128 , 64 , 128, 128 , 128, 192 ,128,
                    0, 192 , 64 , 192, 128 , 192, 192 ,192,      
                ]

let shieldMap = [766, 574, 574, 574, 384, 574, 192 , 574 , 0, 574,
    766, 384, 574, 384, 384, 384, 192 , 382 , 0, 384,
    766, 192, 574, 192, 384, 192, 192 , 192 , 0, 192,
    766, 0, 574, 0, 384, 0, 192 , 0 , 0, 0

]

class animatedSprite {
    constructor(
        x,
        y,
        width,  //when drawing on new
        height,  //
        sWidth,
        sHeight,
        imageMap,
        targetCanvas,
        refreshRate,
        animationArray
    ) {

        this.displaySprite = this.displaySprite.bind(this);
        this.removeSprite = this.removeSprite.bind(this);

        this.loaded = 0;
        let newImage = new Image();
        newImage.onload = () => {
        
            this.loaded = 1;
            this.image = newImage;
            this.displaySprite();
        };
        newImage.src = imageMap;
        this.width = width;
        this.height = height;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.x = x;
        this.y = y;
        this.targetCanvas = document
            .getElementById(targetCanvas)
            .getContext('2d');

        // first animation frame
        this.currentFrame = 0
        this.animationArray = animationArray
        this.refreshRate = refreshRate

    }
    removeSprite() {
        //explosion image
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height);
    }

    //

    displaySprite() {
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height)
        let sourceX = this.animationArray[this.currentFrame]
        let sourceY = this.animationArray[this.currentFrame + 1]
        if (this.loaded === 1) {
            this.targetCanvas.drawImage(
                //sourceImage
                this.image,
                sourceX, //source x
                sourceY, //source y
                this.sWidth, //source width 
                this.sHeight, //source height
                //destiantion canvas
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
        this.currentFrame = this.currentFrame + 2;
        if (this.currentFrame < this.animationArray.length ){
            setTimeout(this.displaySprite, this.refreshRate)
        } else {
            this.removeSprite()
        }
        

    }
}
//(x, y, width, height, imageMap, targetCanvas, refreshRate, animationArray )
/*let shield = new animatedSprite(
    40,
    40,
    192,
    192,
    192,
    192,
    '../images/shield.png',
    'explosionCanvas',
    20,
    shieldMap
);*/
