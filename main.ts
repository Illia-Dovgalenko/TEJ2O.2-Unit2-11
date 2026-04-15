/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program Number Compare
*/

// variables
let number1 = 0
let number2 = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// show number1
input.onButtonPressed(Button.A, function () {
    number1 = randint(0, 99)
    basic.showNumber(number1)
})

// show number2
input.onButtonPressed(Button.B, function () {
    number2 = randint(0, 99)
    basic.showNumber(number2)
})

// compare numbers
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.showString("<")
    } else  {
        basic.showString(">")
    }
})
