import React, { useState } from "react";
import "./newUser.css";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    username: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("../users");
    console.log(details);
  };

  return (
    <div className="newUser-main">
      <h1 className="heading">Create New User</h1>
      <form className="form-main" onSubmit={submitHandler}>
        <div className="formInner">
          <div className="formGroup">
            <label htmlFor="name">Fullname:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name} className="inputSpace"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="name">Username: </label>
            <input
              type="text"
              name="text"
              id="text"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
              required className="inputSpace"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="name">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              required className="inputSpace"
            />
          </div>

          <button className="submitButton" onClick={submitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
}
