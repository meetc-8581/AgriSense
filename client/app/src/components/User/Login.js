import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("//localhost:5000/api/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="page-title" style={{ maxWidth: "1000px" }}>
        <h1>Welcome back!</h1>
        <h3>Log in to your account.</h3>
      </div>
      <div className="panel_body">
        <form className="form-control" onSubmit={login}>
          <div className="form-feild">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-feild">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="btn btn--m">
            Log in
          </button>
        </form>
      </div>
      <div className="page-title">
        Forgot password?
        <a style={{ textDecoration: "underline", color: "blue" }} href="/login">
          {" "}
          Reset
        </a>
        <br></br>
        Don't have an account?
        <a
          style={{ textDecoration: "underline", color: "blue" }}
          href="/register"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Login;
