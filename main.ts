/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program Number Compare
*/

let number1 = 0
let number2 = 0

// generate two random numbers (0–99)
basic.forever(function () {
        number1 = randint(0, 99)
        number2 = randint(0, 99)
})

// show first number
input.onButtonPressed(Button.A, function () {
    basic.showNumber(number1)
})

// show second number
input.onButtonPressed(Button.B, function () {
    basic.showNumber(number2)
})

// compare numbers
input.onGesture(Gesture.Shake, function () {
    if (number1 > number2) {
        basic.showString("<")
    } else {
        basic.showString(">")
    }
})
