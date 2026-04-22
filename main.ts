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

number1 = randint(0, 99)
number2 = randint(0, 99)

// show number1
input.onButtonPressed(Button.A, function () {
    basic.showString('#1:' + number1)
})

// show number2
input.onButtonPressed(Button.B, function () {
    basic.showString('#2:' + number2)
})


// compare numbers
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.showString(number1 + "<" + number2)
    } else  {
        basic.showString(number1 + ">" + number2)
    }
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
