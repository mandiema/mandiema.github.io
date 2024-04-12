import { BUTTONS } from './button_list.js';
import Button from './Button.js';
import './ButtonGrid.css'

export default function ButtonGrid() {
    return (
        <section id="grid">
            <Button {...BUTTONS[0]} />
            <Button {...BUTTONS[1]} />
            <Button {...BUTTONS[2]} />
            <Button {...BUTTONS[3]} />
            <Button {...BUTTONS[4]} />
            <Button {...BUTTONS[5]} />
        </section>
    )
}