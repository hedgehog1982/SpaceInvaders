let buildingArray = []

class buildingSquare {
    constructor(x, y, width, height, targetCanvas) {
        //destroyLimit is how often it is hit before the whole thing is destroyed
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
        this.destroyLimit = 3  // set here rather than calling it 
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

const bridgeBuilder = (startX, startY, height, width) => {
    //draw left side
    for (let y = startY + 8; y < startY + height; y = y + 8){
        buildingArray.push( new buildingSquare(startX, y, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(startX + 8, y, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(startX + 16, y ,8, 8, 'myCanvas'))
    }


    //draw right side  
    for (let y = startY + 8; y < startY + height; y = y + 8){
        buildingArray.push( new buildingSquare(startX + width , y, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(startX + width + 8, y, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(startX + width + 16, y , 8, 8, 'myCanvas'))
    }

    //draw top
    //really hacky forcing widths
    for (let x = startX + 16; x < startX + width + 8; x = x + 8){
        buildingArray.push( new buildingSquare(x, startY, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(x, startY + 8, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(x, startY + 16 ,8, 8, 'myCanvas'))
    }

}

bridgeBuilder(100 ,540, 50, 50)
bridgeBuilder(250 ,540, 50, 50)
bridgeBuilder(400 ,540, 50, 50)
bridgeBuilder(550 ,540, 50, 50)