import "./calculator-style.css";
import Display from "./calculator-display";
import Keypad from "./calculator-keypad";
import { useState } from "react";

const max_display_length: number = 10;
const empty_display: string = "EMPTY";

function Calculator() {
  const [display, displayUpdater] = useState(empty_display);

  const add_to_display = function (char: string): void {
    if (display !== empty_display) {
      if (display.length >= max_display_length) {
        displayUpdater(display.substring(1) + char);
        return;
      }
      displayUpdater(display + char);
      return;
    }
    displayUpdater(String(char));
  };

  function remove_from_display(): void {
    if (display !== empty_display && display.length > 1) {
      displayUpdater(display.substring(0, display.length - 1));
      return;
    }
    displayUpdater(empty_display);
  }

  function clear_display(): void {
    displayUpdater(empty_display);
  }

  function evalulate(): void {
    displayUpdater(String(eval(display)).substring(0, max_display_length));
  }

  return (
    <div className="container">
      <Display text={display} />
      <Keypad
        add={add_to_display}
        remove={remove_from_display}
        clear={clear_display}
        evalulate={evalulate}
      />
    </div>
  );
}

export default Calculator;
