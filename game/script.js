let bulletArray = []; //store array of bullets ......
let enemyArray = []

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

enemyArray.push(  new moveableStaticSprite(
    130,
    200,
    40,
    40,
    '../images/invader.png',
    'myCanvas'
))

