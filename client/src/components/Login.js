import React, { useState } from "react";

// import axiosWithAuth
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialFormState = { username: "", password: "" };
  const [user, setUser] = useState(initialFormState);

  // change input handler
  const handleChange = e => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  // submit handler
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        setUser(initialFormState);
        props.history.push("/bubble-page");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="ind-field">
          <label htmlFor="username ">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="ind-field">
          <label htmlFor="password ">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default Login;
