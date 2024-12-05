input.onButtonPressed(Button.AB, function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            `)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
    } else if (input.buttonIsPressed(Button.AB)) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
