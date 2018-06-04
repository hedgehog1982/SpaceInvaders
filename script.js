class staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas){
        this.displaySprite = this.displaySprite.bind(this)
        let newImage = new Image()
            newImage.onload = () => {
                this.image = newImage
                this.displaySprite()
            }
            newImage.src = imageLink
        this.width = width
        this.height = height
        this.x = x;
        this.y = y;
        this.targetCanvas = document.getElementById(targetCanvas).getContext("2d")
    }

    displaySprite(){
        console.log("drawing")
        this.targetCanvas.drawImage(this.image,this.x,this.y, this.width, this.height)
    }

}

class moveableStaticSprite extends staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas) {
        super(x, y, width, height, imageLink, targetCanvas)
    }

    moveSprite(newX, newY){
        //clear previous space
        this.targetCanvas.clearRect(this.x, this.y, this.width, this.height)
        //update new location
        this.x = newX
        this.y = newY
        //render
        super.displaySprite()
    }

}

class controllableStaticSprite extends staticSprite {
    constructor(x, y, width, height, imageLink, targetCanvas) {
        super(x, y, width, height, imageLink, targetCanvas)
        this.moveKeySprite = this.moveKeySprite.bind(this)
        document.addEventListener("keydown", () => this.moveKeySprite(event))
    }

    moveKeySprite(event){
        console.log("click", event)
    }
}

let topLeftCat1 = new moveableStaticSprite(0, 100, 60, 60, "cat.png", "myCanvas")
let topRightCat = new controllableStaticSprite(0, 650, 60, 60, "download.jpg", "myCanvas")

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("SCORE : THE SCORE GOES HERE",10,50);
ctx.beginPath();
ctx.moveTo(0,100 );
ctx.lineTo(700,100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,600 );
ctx.lineTo(700,600);
ctx.stroke();
//gameplay within 50px to 650px;

//for (let i = 2 ; i < 300; i++){
//   setTimeout( () => {topLeftCat1.moveSprite(i+10 * 2, i * 2)} , i*10)
//}


 


 
