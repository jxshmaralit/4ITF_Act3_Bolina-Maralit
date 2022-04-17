import React, { useState } from "react";

import User from "../../images/user.png";
import Key from "../../images/key.png";

export default function Login(props) {
  const { handleShowLogin, handleShowSignup } = props.handlers;

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "2018111635",
      password: "1234",
    },
    {
      username: "cashier",
      password: "2468",
    },
  ];

  const error = {
    uname: "Invalid Number",
    pword: "Invalid Password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pword } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pword.value) {
        setErrorMessages({ name: "pword", message: error.pword });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: error.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <label className="portal">STUDENT PORTAL</label>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <img className="icons" src={User} alt="pic" width="16" height="16" />
          <input
            className="input-field"
            type="text"
            placeholder="Student Number"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <img className="icons" src={Key} alt="pic" width="16" height="16" />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            name="pword"
            required
          />
          {renderErrorMessage("pword")}
        </div>
        <button
          type="button"
          onClick={() => handleShowSignup()}
          className="link"
        >
          Don't have an account?
        </button>
        <div className="button-container">
          <button type="reset">Cancel</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>
            You have successfully logged in. Welcome to your portal!
            <button
              type="submit"
              className="signout"
              onClick={() => handleShowLogin()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}
