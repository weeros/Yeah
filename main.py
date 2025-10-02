def on_button_pressed_a():
    global numero
    numero += 1
    basic.show_number(numero)
input.on_button_pressed(Button.A, on_button_pressed_a)

numero = 0
numero = 0