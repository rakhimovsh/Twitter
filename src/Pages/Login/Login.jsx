import "./Login.scss";
import React from "react";
import logo from "../../Assets/Images/twitter-logo.svg";
import Button from "../../Components/Button/Button";
import { Context } from "../../Components/Context/LoginContext";

function Login() {
  const { setToken } = React.useContext(Context);
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { user__email, user_password } = evt.target.elements;
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user__email.value.trim(),
        password: user_password.value.trim(),
      }),
    });
    const data = await res.json();
    if (data?.token) {
      setToken(data?.token);
    }
  };
  return (
    <div className="container login">
      <img src={logo} alt="twitter logotipe" width={50} height={41} />
      <h1 className="login__title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__input"
          type="text"
          placeholder="Phone number, email address"
          name="user__email"
          defaultValue="eve.holt@reqres.in"
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          name="user_password"
          defaultValue="cityslicka"
        />
        <Button color="blue">Log In</Button>
      </form>
      <div className="login__linkCollection">
        <button className="login__btn">Forgot password?</button>
        <button className="login__btn">Sign up to Twitter</button>
      </div>
    </div>
  );
}

export default Login;
