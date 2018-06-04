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

<<<<<<< HEAD

enemyArray.push(  new moveableStaticSprite(
    130,
    200,
=======
enemyArray.push(new moveableStaticSprite(
    130,  //x
    200,  //y
>>>>>>> 25cbd944b83b70096b4fcd012c5e15aba9634214
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
enemyArray.push(  new moveableStaticSprite(
    280,
    200,
    40,
    40,
    '../images/invader.png',
    'myCanvas'
))

