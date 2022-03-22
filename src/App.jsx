import React from "react";
import All from "./All";
import Login from "./Pages/Login/Login";
import { Context } from "./Components/Context/LoginContext";

function App() {
  const { token } = React.useContext(Context);
  const isLogenned = token;
  if (isLogenned) {
    return <All />;
  } else {
    return <Login />;
  }
}

export default App;
