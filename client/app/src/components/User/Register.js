import React, { useContext, useState } from "react";
import axios from "axios";
import "./Register.css";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        name,
        email,
        password,
      };

      await axios.post("/users", registerData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="page-title">
        <h1>Join Agrisense</h1>
        <h3>A world of better agriculture.</h3>
      </div>

      <div className="panel_body">
        <form className="form-control" onSubmit={register}>
          <div className="form-feild">
            <label>FULL NAME</label>
            <input
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-feild">
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-feild">
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-feild">
            <label>CONFIRM PASSWORD</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setpasswordVerify(e.target.value)}
              value={passwordVerify}
            />
          </div>

          <button type="submit" className="btn btn--m">
            Create an account
          </button>
        </form>
      </div>
      <div className="page-title">
        Already Registered?
        <Link style={{ textDecoration: "underline" }} to="login">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
