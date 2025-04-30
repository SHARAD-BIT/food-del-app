import React, { useState } from "react";
import "./login.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
const login = ({ SetShowLogin }) => {
  const [currstate, SetCurrState] = useState("Sign Up");

  return (
    <div className="Login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>

          <img
            onClick={() => SetShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />

          <input type="password" placeholder="Enter Password" required />
        </div>
        <button>
          {" "}
          {currstate === "Sign Up" ? "create account" : "Login"}{" "}
        </button>
        <div className=" login-popup-condition">
          <input type="checkbox" required />
          <p>B y continuing ,i agree to the term of use and privacy policy .</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create a new account ?
            <span onClick={() => SetCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            {" "}
            Already have an Account ?
            <span onClick={() => SetCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default login;
