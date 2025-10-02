
radio.onReceivedNumber(function (message) {
    showMessage(message)

})

// TODO implement localId
let localId = 0
const showMessage = (message: number) => {
    basic.showIcon(message)
}
const selectIcon = () => {
    IconSelected = IconSelected + 1;
}
const sendIcon = () => {


    for (let icon = 0; icon < 10; icon++) {
        for (let canal = 0; canal < 255; canal++) {
            radio.sendNumber(icon)
            radio.setGroup(canal)

        }

    }
}

const changeCanal = () => {
    canal = canal + 1;    
}



let IconSelected = 1
let canal = 1
radio.setFrequencyBand(0)
input.onLogoEvent(TouchButtonEvent.Touched, changeCanal)
input.onButtonPressed(Button.A, selectIcon);
input.onButtonPressed(Button.B, sendIcon);
