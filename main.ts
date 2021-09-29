bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.No)
})
input.onSound(DetectedSound.Loud, function () {
    if (input.soundLevel() >= 90) {
        music.setBuiltInSpeakerEnabled(true)
        basic.showIcon(IconNames.EigthNote)
    }
    for (let index = 0; index < 20; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(true)
    basic.showIcon(IconNames.EigthNote)
    for (let index = 0; index < 20; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onSound(DetectedSound.Quiet, function () {
    if (input.soundLevel() <= 20) {
        music.setBuiltInSpeakerEnabled(false)
        music.stopAllSounds()
    }
})
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
basic.showIcon(IconNames.Diamond)
input.setSoundThreshold(SoundThreshold.Loud, 90)
basic.clearScreen()
