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

let topLeftCat1 = new moveableStaticSprite(0, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat2 = new moveableStaticSprite(20, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat3 = new moveableStaticSprite(40, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat4 = new moveableStaticSprite(60, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat5 = new moveableStaticSprite(80, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat6 = new moveableStaticSprite(100, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat7 = new moveableStaticSprite(120, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat8 = new moveableStaticSprite(140, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat9 = new moveableStaticSprite(180, 0, 60, 60, "cat.png", "myCanvas")
let topLeftCat10 = new moveableStaticSprite(200, 0, 60, 60, "cat.png", "myCanvas")
let topRightCat = new controllableStaticSprite(0, 650, 60, 60, "download.jpg", "myCanvas")


for (let i = 2 ; i < 300; i++){
   setTimeout( () => {topLeftCat1.moveSprite(i+10 * 2, i * 2)} , i*10)
}
for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat2.moveSprite(i+20 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat3.moveSprite(i+30 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat4.moveSprite(i+ 40 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat5.moveSprite(i + 50 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat6.moveSprite(i + 60 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat7.moveSprite(i + 70 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat8.moveSprite(i + 80 * 2, i * 2)} , i*10)
 }

 for (let i = 2 ; i < 300; i++){
    setTimeout( () => {topLeftCat9.moveSprite(i + 90* 2, i * 2)} , i*10)
 }

 


 
