class buildingSquare {
    constructor(x, y, width, height, destroyLimit, targetCanvas) {
        //destroyLimit is how often it is hit before the whole thing is destroyed
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
        this.destroyLimit = destroyLimit
        this.targetCanvas = document
            .getElementById(targetCanvas)
            .getContext('2d');

        this.drawWholeSquare();
    }

    hitSquare(){
        for (let x = this.x; x < this.x + this.width; x++ ){ // along x axis
            for (let y = this.y; y < this.y + this.height; y++ ){ // along x axis
                //
                if (Math.floor(Math.random() * this.destroyLimit  ) === 0){// destroy an amount of blocks
                    this.targetCanvas.clearRect(x, y , 1, 1)
                }
            }
        }
        this.destroyLimit --
    }

    drawWholeSquare() {
        console.log('drawing rect');
        this.targetCanvas.fillStyle = "red";
        this.targetCanvas.fillRect(this.x, this.y, this.width, this.height)
    }
}