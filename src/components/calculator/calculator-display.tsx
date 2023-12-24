import "./calculator-style.css";

interface props {
  text?: string;
}
function Display({ text = "empty" }: props) {
  return <div className="display">{text}</div>;
}

export default Display;
