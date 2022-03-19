import "./Button.scss";

function Button({ children, color, size, position, black }) {
  return (
    <button
      className={`btn ${color} ${size} ${position} ${black ? "black" : ""}
  `}
    >
      {children}
    </button>
  );
}

export default Button;
