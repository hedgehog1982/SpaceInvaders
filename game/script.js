let bulletArray = []; //store array of bullets ......
let enemyArray = []


let spaceShip = new controllableStaticSprite(
    350,
    621,
    70,
    70,
    '../images/SpaceShip.png',
    'myCanvas',
    'ArrowLeft',
    'ArrowRight'
);


bridgeBuilder(50 ,540, 50, 80);
bridgeBuilder(200 ,540, 50, 80);
bridgeBuilder(350 ,540, 50, 80);
bridgeBuilder(500 ,540, 50, 80);

invaderBuilder(150, 100,40, 40, '../images/invader.png','myCanvas');

