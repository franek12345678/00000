radio.onReceivedValue(function (name, value) {
    if (name == "DICE") {
        basic.showNumber(value)
    }
})
input.onGesture(Gesture.Shake, function () {
    DICE = randint(1, 6)
    basic.showNumber(DICE)
    radio.sendValue("DICE", DICE)
})
let DICE = 0
led.setBrightness(255)
radio.setGroup(255)
radio.setFrequencyBand(83)
radio.setTransmitPower(7)
