let _4digit: grove.TM1637 = null
basic.forever(function () {
    servos.P0.setAngle(90)
    _4digit = grove.createDisplay(DigitalPin.P16, DigitalPin.P15)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
})
