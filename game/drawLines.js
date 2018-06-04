var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.font = '30px Arial';
ctx.fillText('SCORE : THE SCORE GOES HERE', 10, 50);

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(700, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 600);
ctx.lineTo(700, 600);
ctx.stroke();
//gameplay within 50px to 650px;