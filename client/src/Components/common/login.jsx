import React, { useState } from "react";
import "../../StyleSheet/HouseListing.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const dev_url = "http://127.0.0.1:5000/api/login";
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    axios
      .post(dev_url, data)
      .then((response) => {
        console.log(response);
        return <Redirect to='/' />
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-row HouseListing__container">
      <form className="HouseListing__form">
        <h1>Register an account</h1>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter in your email address" required
          onChange={(e) => setEmail(e.target.value)}/>
        <label>password</label>
        <input
          type="text"
          placeholder="Password" required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={login}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;
