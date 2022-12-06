import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div>
      <header>
        <div className="d-flex justify-content-between flex-lg-row flex-md-column flex-sm-column">
          <img
            style={{ maxWidth: "300px", margin: "0 auto" }}
            src={logo}
            alt=""
          />
          <button data-text="Awesome" class="button">
            <span class="actual-text">&nbsp;üyeliksiz ödeme&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;üyeliksiz ödeme&nbsp;
            </span>
          </button>
        </div>
      </header>
      <main>
        <form action="">
          <input
            placeholder="Username"
            type="text"
            className="input"
            required=""
          ></input>
        </form>
      </main>
    </div>
  );
};

export default Login;
