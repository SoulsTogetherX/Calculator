import "./calculator-style.css";
import Button from "./calculator-button";

interface props {
  add: (char: string) => void;
  remove: () => void;
  clear: () => void;
  evalulate: () => void;
}

function Keypad({
  add: add,
  remove: remove,
  clear: clear,
  evalulate: evalulate,
}: props) {
  return (
    <div className="keypad_grid">
      <div className="keypad_top_buttons">
        <Button onClick={remove} display="back" />
        <Button onClick={clear} display="clear" />
      </div>
      <div className="keypad_numbers_grid">
        <Button onClick={() => add(".")} display="." />
        <Button onClick={() => add("(")} display="(" />
        <Button onClick={() => add(")")} display=")" />
        <Button onClick={() => add("+")} display="+" />

        <Button onClick={() => add("1")} display="1" />
        <Button onClick={() => add("2")} display="2" />
        <Button onClick={() => add("3")} display="3" />
        <Button onClick={() => add("-")} display="-" />

        <Button onClick={() => add("4")} display="4" />
        <Button onClick={() => add("5")} display="5" />
        <Button onClick={() => add("6")} display="6" />
        <Button onClick={() => add("/")} display="/" />

        <Button onClick={() => add("7")} display="7" />
        <Button onClick={() => add("8")} display="8" />
        <Button onClick={() => add("9")} display="9" />
        <Button onClick={() => add("*")} display="*" />
      </div>

      <Button onClick={evalulate} display="=" />
    </div>
  );
}

export default Keypad;
