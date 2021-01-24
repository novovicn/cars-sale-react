import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import './Auth.css';

function Auth(props) {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [isReg, setIsReg] = useState(false);

  const changeReg = () => {
    setIsReg(!isReg);
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        alert('User signed in!');
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user
        console.log(auth);
        if (auth) {
          history.push("/");
          alert('User registered!');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h1>{isReg ? "Sign up" : "Sign in"}</h1>
        <form>
          <input
            type="text"
            className="auth__input"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="auth__input"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}   
          />

          <button
            type="submit"
            className="auth__submit"
            onClick={isReg ? register : signIn}
          >
            {isReg ? "Register" : "Login"}
          </button>
        </form>
        <p></p>
        <p onClick={changeReg} className="auth__switch">
          {isReg ? "Switch to Login" : "Switch to register"}
        </p>
      </div>
    </div>
  );
}



export default Auth;
