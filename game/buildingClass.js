let buildingArray = [];
let enemyArray = [];
let heartArray = [];

class buildingSquare {
    constructor(x, y, width, height, targetCanvas) {
        //destroyLimit is how often it is hit before the whole thing is destroyed
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
        this.destroyLimit = 2  // set here rather than calling it 
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
        this.targetCanvas.fillStyle = "#6ab04c";
        this.targetCanvas.fillRect(this.x, this.y, this.width, this.height)
    }
}

const bridgeBuilder = (startX, startY, height, width) => {
    //draw left side
    for (let y = startY + 8; y < startY + height; y = y + 8){
        buildingArray.push( new buildingSquare(startX, y, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(startX + 8, y, 8, 8, 'myCanvas'))
        //buildingArray.push( new buildingSquare(startX + 16, y ,8, 8, 'myCanvas'))
    }


    //draw right side  
    for (let y = startY + 8; y < startY + height; y = y + 8){
        buildingArray.push( new buildingSquare(startX + width , y, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(startX + width + 8, y, 8, 8, 'myCanvas'))
        //buildingArray.push( new buildingSquare(startX + width + 16, y , 8, 8, 'myCanvas'))
    }

    //draw top
    //really hacky forcing widths
    for (let x = startX + 16; x < startX + width + 8; x = x + 8){
        buildingArray.push( new buildingSquare(x, startY, 8, 8, 'myCanvas'))
        buildingArray.push( new buildingSquare(x, startY + 8, 8, 8, 'myCanvas'))
       // buildingArray.push( new buildingSquare(x, startY + 16 ,8, 8, 'myCanvas'))
    };

};

bridgeBuilder(50 ,500, 25, 85);
bridgeBuilder(200 ,500, 25, 85);
bridgeBuilder(350 ,500, 25, 85);
bridgeBuilder(500 ,500, 25, 85);




const invaderBuilder = (startX, startY, height, width) => {
    for (let x = startX ; x < startX + 500; x = x + 115){
        for (let y= startY; y < startY + 200; y = y + 50){
        enemyArray.push(new moveableStaticSprite(
        x,  //x
        y ,  //y
        height,
        width,
        '../images/enemy2.png',
        'myCanvas',
        1
    ))

        };

    };

};

invaderBuilder(150, 150,40 ,40);

const heartBuilder = (startX, startY, height, width) => {
   
        heartArray.push(new staticSprite(
        startX,  //x
        startY ,  //y
        height,
        width,
        '../images/Heart.png',
        'myCanvas'
    ))
      

        };

  

  heartBuilder(400, 0,80 ,80);
  heartBuilder(500, 0,80 ,80);
  heartBuilder(600, 0,80 ,80);

  