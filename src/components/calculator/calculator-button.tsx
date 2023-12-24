import "./calculator-style.css";

interface props {
  onClick: () => void;
  display: string;
}

function Button({ onClick: onClick, display: display }: props) {
  return <button onClick={onClick}>{display}</button>;
}

export default Button;
