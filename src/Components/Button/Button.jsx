import "./Button.scss";

function Button({ children, color, disabled }) {
  return <button className={`btn ${color} ${disabled ? }`}>{children}</button>;
}

export default Button;
