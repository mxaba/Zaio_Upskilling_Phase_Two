import React, { useState } from "react";
import "../../StyleSheet/HouseListing.css";
import axios from "axios";
import { Redirect } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerAccount = (e) => {
    e.preventDefault();
    const dev_url = "http://127.0.0.1:5000/api/register";
    const data = new FormData();
    data.append("name", name);
    data.append("surname", surname);
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
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter you legal name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Surname</label>
        <input
          type="text"
          placeholder="Enter your legal surname in use"
          onChange={(e) => setSurname(e.target.value)}
        />
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter in your email address"
          onChange={(e) => setEmail(e.target.value)}/>
        <label>password</label>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={registerAccount}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Register;
