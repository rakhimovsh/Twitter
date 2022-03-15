import "./Button.scss";

function Button({ children, color, disabled }) {
  return <button className={`btn ${color}
  `}>{children}</button>;
}

export default Button;
