let bulletArray = []; //store array of bullets ......
let enemyArray = []
let buildingArray = []

let spaceShip = new controllableStaticSprite(
    330,
    601,
    80,
    80,
    '../images/SpaceShip.png',
    'myCanvas',
    'ArrowLeft',
    'ArrowRight'
);

enemyArray.push(new moveableStaticSprite(
    130,  //x
    200,  //y
    40,
    40,
    '../images/invader.png',
    'myCanvas'
))

enemyArray.push(  new moveableStaticSprite(
    180,
    200,
    40,
    40,
    '../images/invader.png',
    'myCanvas'
))
enemyArray.push(  new moveableStaticSprite(
    230,
    200,
    40,
    40,
    '../images/invader.png',
    'myCanvas'
))
enemyArray.push( new moveableStaticSprite(
    280,
    200,
    40,
    40,
    '../images/invader.png',
    'myCanvas'
))

bridgeBuilder(50 ,540, 50, 80)
bridgeBuilder(200 ,540, 50, 80)
bridgeBuilder(350 ,540, 50, 80)
bridgeBuilder(500 ,540, 50, 80)