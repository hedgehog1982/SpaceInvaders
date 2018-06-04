setInterval(() => {

    console.log(spaceShip)
    if (spaceShip.currentDirection === "left"){
        if (spaceShip.x >= 10) {
             spaceShip.moveSprite(spaceShip.x - 5, spaceShip.y)
        }
    } else if (spaceShip.currentDirection === "right") {
        if (spaceShip.x <= 700 - spaceShip.width - 10) {
            spaceShip.moveSprite(spaceShip.x + 5, spaceShip.y)
        }
    }
}, 10); 