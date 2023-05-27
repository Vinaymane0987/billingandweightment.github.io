import React from "react";
import "./style.css";
import img1 from "../../assets/home_pic.png";
import { Link } from "react-router-dom";
const OperatorRegister = () => {
  return (
    <div className="signup">
      <div className="signupImg">
        <img src={img1} alt="logo" />
      </div>
      <div className="signup__container">
        <div className="box">
          <div className="headingcontiner">
            <h1 style={{ color: "rgb(108,87,161)" }}>Operator Sign Up</h1>
            <Link
              to="/"
              className="links"
              style={{
                color: "white",
                backgroundColor: "rgb(108,87,161)",
                borderRadius: "5px",
                padding: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Admin?
            </Link>
          </div>
          <form>
            <div className="labelcontainer">
              <input type="email" placeholder="enter your email" required />
            </div>
            <div className="labelcontainer2">
              <input
                type="password"
                placeholder="enter your password"
                required
              />
            </div>
            <br />
            <button className="submitbutton" style={{ width: "100%" }}>
              Register
            </button>
          </form>
          <Link
            style={{
              color: "rgb(108,87,161)",
              textDecoration: "none",
              // color: "black",
            }}
            to="/operator"
            className="links"
          >
            Don you have an account?{" "}
            <span style={{ textDecoration: "underline", fontWeight: 600 }}>
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OperatorRegister