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


//draw first building
buildingArray.push( new buildingSquare(100, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(100, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(100, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(100, 570, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 570, 8, 8, 4, 'myCanvas'))


