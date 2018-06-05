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

//Block One begin
buildingArray.push( new buildingSquare(100, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(100, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(100, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(100, 570, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 570, 8, 8, 4, 'myCanvas'))

buildingArray.push( new buildingSquare(100, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(116, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(108, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(124, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(116, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(132, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(124, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(140, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(132, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(148, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(140, 562, 8, 8, 4, 'myCanvas'))

buildingArray.push( new buildingSquare(148, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(140, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(148, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(140, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(148, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(140, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(148, 570, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(140, 570, 8, 8, 4, 'myCanvas'))

//block one end

//block Two start
buildingArray.push( new buildingSquare(240, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(248, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(240, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(248, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(240, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(248, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(240, 570, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(248, 570, 8, 8, 4, 'myCanvas'))

buildingArray.push( new buildingSquare(240, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(248, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(256, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(248, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(264, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(256, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(274, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(264, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(282, 562, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(272, 562, 8, 8, 4, 'myCanvas'))

buildingArray.push( new buildingSquare(282, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(274, 592, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(282, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(274, 586, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(282, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(274, 578, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(282, 570, 8, 8, 4, 'myCanvas'))
buildingArray.push( new buildingSquare(274, 570, 8, 8, 4, 'myCanvas'))

//Block Two end