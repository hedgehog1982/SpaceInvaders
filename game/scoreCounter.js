var score = 0;
var hit = false;
var spaceShipHit = false;

var hearts = 3;


const scored = () =>{  
    if (hit == true) {
        console.log("increase score")
        score += 10;
        ctx.font = '30px Arial';
        ctx.fillText('SCORE : ',10, 50);
        ctx.clearRect(200, 10, 50, 50);
        ctx.fillText(score, 200, 50);
    }

};

const removeHearts = () =>{
    if (spaceShipHit == true){
        hearts -= 1
        console.log(hearts)
        
        if (hearts == 0){
            spaceShip.removeSprite();
            
            let test = new animatedSprite(
                spaceShip.x,
                spaceShip.y,
                spaceShip.width,
                spaceShip.height,
                64,
                64,
                '../images/Explo.png',
                'explosionCanvas',
                50,
                explosionMap
            );
            spaceShip ="";
            
        };
    }
  
};