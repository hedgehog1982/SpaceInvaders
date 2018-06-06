let explosionMap = [0, 0 , 64 , 0, 128 , 0, 192 ,0,
                    0, 64 , 64 , 64, 128 , 64, 192 ,64,
                    0, 128 , 64 , 128, 128 , 128, 192 ,128,
                    0, 192 , 64 , 192, 128 , 192, 192 ,192,      
                ];

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
        console.log("constructing")
        this.displaySprite = this.displaySprite.bind(this);
        this.removeSprite = this.removeSprite.bind(this);

        this.loaded = 0;
        let newImage = new Image();
        newImage.onload = () => {
            console.log("loaded explosion")
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
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height);
        console.log('drawing');
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
            console.log("next frame")
            setTimeout(this.displaySprite, this.refreshRate)
        } else {
            console.log("removing")
            this.removeSprite()
        }
        

    }
}
//(x, y, width, height, imageMap, targetCanvas, refreshRate, animationArray )
/*let test = new animatedSprite(
    40,
    40,
    40,
    40,
    64,
    64,
    '../images/Explo.png',
    'explosionCanvas',
    50,
    explosionMap
);*/
