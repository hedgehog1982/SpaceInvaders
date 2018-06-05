var score = 0;
var hit = false;

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

