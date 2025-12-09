/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus Quinzan
 * Created on: Sep 2020
 * This program shows when button A is pressed, the pixels moves around the edge of the Micro:bit
*/

// variables
let sprite: game.LedSprite = null

// setup
basic.showIcon(IconNames.Duck)

// when "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
    sprite = game.createSprite(0, 0)
    let sides = 0
    while (sides < 4) {
        let steps = 0
        while (steps < 4) {
            sprite.move(1)
            basic.pause(200)
            steps += 1
        }
        sprite.turn(Direction.Right, 90)
        sides += 1
    }
    sprite.delete()
})
