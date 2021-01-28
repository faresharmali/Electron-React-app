import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import { useState } from "react";

const Login = (props) => {
  let [username, setUser] = useState("");
  let [Password, setPassword] = useState("");
  const opentab = () => {
    if (username.trim() != "" && Password.trim() != "") {
     props.handleChange({username,Password})
    } else {
      console.log("empry");
    }
  };
  const formHandler = () => {
    let inputs = document.querySelectorAll("input");
    setUser(inputs[0].value);
    setPassword(inputs[1].value);
  };

  return (
    <section className="login_page flex_center flex_column">
      <img src={Logo} alt="" />
      <h1>Se Connecter</h1>
      <input
        onChange={formHandler}
        type="text"
        placeholder="Nom D'utilisateur"
      />
      <input
        type="password"
        placeholder="Mot de Passe"
        onChange={formHandler}
      />
      <button onClick={opentab}> Connecter </button>
    </section>
  );
};

export default Login;
