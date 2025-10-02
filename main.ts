/**
 * Angle de l'inclinaison gauche / droite
 * 
 * input.rotation(Rotation.Roll)
 * 
 * Angle de l'inclinaison haut / bas
 * 
 * input.rotation(Rotation.Pitch)
 */
// Angle de l'inclinaison haut / bas
function point (x: number, y: number) {
    led.unplot(prev_x, prev_y)
    led.plot(x, y)
    prev_x = x
    prev_y = y
}
function degreToPoint (value: number) {
    position = 2 + value * 5 / 180
    if (position >= 4) {
        return 4
    }
    if (position < 0) {
        return 0
    }
    return position
}
let position = 0
let prev_y = 0
let prev_x = 0
prev_x = 2
prev_y = 2
basic.forever(function () {
    point(degreToPoint(input.rotation(Rotation.Roll)), degreToPoint(input.rotation(Rotation.Pitch)))
})
