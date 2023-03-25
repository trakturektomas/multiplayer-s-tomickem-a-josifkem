radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("a")
    } else if (receivedNumber == 2) {
        basic.showString("b")
    } else if (receivedNumber == 3) {
        basic.showString("c")
    } else if (receivedNumber == 4) {
        basic.showString("d")
    } else if (receivedNumber == 5) {
        basic.showString("e")
    } else if (receivedNumber == 6) {
        basic.showString("f")
    } else if (receivedNumber == 7) {
        basic.showString("g")
    } else if (receivedNumber == 8) {
        basic.showString("h")
    } else if (receivedNumber == 9) {
        basic.showString("ch")
    } else if (receivedNumber == 10) {
        basic.showString("i")
    } else if (receivedNumber == 11) {
        basic.showString("j")
    } else if (receivedNumber == 12) {
        basic.showString("k")
    } else if (receivedNumber == 13) {
        basic.showString("l")
    } else if (receivedNumber == 14) {
        basic.showString("m")
    } else if (receivedNumber == 15) {
        basic.showString("n")
    } else if (receivedNumber == 16) {
        basic.showString("o")
    } else if (receivedNumber == 17) {
        basic.showString("p")
    } else if (receivedNumber == 18) {
        basic.showString("q")
    } else if (receivedNumber == 19) {
        basic.showString("r")
    } else if (receivedNumber == 20) {
        basic.showString("s")
    } else if (receivedNumber == 21) {
        basic.showString("t")
    } else if (receivedNumber == 22) {
        basic.showString("u")
    } else if (receivedNumber == 23) {
        basic.showString("v")
    } else if (receivedNumber == 24) {
        basic.showString("w")
    } else if (receivedNumber == 25) {
        basic.showString("x")
    } else if (receivedNumber == 26) {
        basic.showString(".")
    } else if (receivedNumber == 27) {
        basic.showString("?")
    } else if (receivedNumber == 28) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . # . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    písmeno += 5
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(písmeno)
    písmeno = 0
})
input.onButtonPressed(Button.B, function () {
    písmeno += 1
})
let písmeno = 0
radio.setGroup(1)
písmeno = 0
basic.forever(function () {
    basic.showNumber(písmeno)
})
