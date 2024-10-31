/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows while loops in action
*/

basic.clearScreen()

let sprite: game.LedSprite = null
let loopCounter = 0

basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(5, 5)

    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

