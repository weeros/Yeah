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

function degreToPoint(value : number) : number {
    let position = 2 + (value * 5) / 180
    if (position > 5) { return 5 }
    if (position < 0) { return 0 }
    return position
}

basic.forever( () => {
    point(degreToPoint(input.rotation(Rotation.Roll)), degreToPoint(input.rotation(Rotation.Pitch)))
}) 


let prev_x = 2
let prev_y = 2

