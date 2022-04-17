import React, { useState } from "react";

import Signup from "./components/Signup";
import Login from "./components/Login";

import "./App.css";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const hideSignupPage = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  function handleShowSignup() {
    setShowSignup(true);
    setShowLogin(false);
  }

  function handleShowLogin() {
    alert("Signed out.");
    window.location.reload(false);
  }

  function handleSignupCancel() {
    hideSignupPage();
  }

  const loginProps = { handleShowLogin, handleShowSignup };
  const signupProps = {
    handleSignupCancel,
    setShowLogin,
    setShowSignup,
  };

  return (
    <div className="container">
      {showLogin ? <Login handlers={loginProps} /> : ""}
      {showSignup ? <Signup handlers={signupProps} /> : ""}
    </div>
  );
}
