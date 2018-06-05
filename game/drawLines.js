var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var score = 0;
ctx.font = '30px Arial';
ctx.fillText('SCORE : ',10, 50);
ctx.fillText(score,200, 50)

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(700, 100);
ctx.stroke();


//gameplay within 50px to 650px;