import React, { useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Box.css";
import TextField from "@mui/material/TextField";
export const Signupbox = () => {
  const [details,setDetails] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    if (details.password!== details.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      console.log(details.email,details.password)
      const res = await signup(details.email,details.password);
      console.log(res);
      navigate("/");
    } catch(error) {
      console.log(error);
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="main_con">
      <div>
        <div className="con1">
          <div className="con2">
            <h3 className="head-text">
            BookLib
            </h3>
            <div>
              <h1 className="head">Sign up</h1>
            </div>
            <div className="con3">
              <div className="con4">
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label
                      for="mail"
                    >
                      Email
                    </label>
                    <TextField
                      id="mail"
                      type="email" 
                      onChange={(e) => setDetails({...details, email: e.target.value})}
                      fullWidth
                    />
                  </div>
                  <div className="field">
                    <label
                      for="password"
                    >
                      Password
                    </label>
                    <TextField
                      id="password"
                      type = "password"
                      name="password"
                      fullWidth
                      onChange={(e) => setDetails({...details, password: e.target.value})}
                    />
                  </div>
                  <div className="field">
                    <label
                      for="password"
                    >
                      Password Confirmation
                    </label>
                    <TextField
                      id="password"
                      type = "password"
                      name="password"
                      fullWidth
                      onChange={(e) => setDetails({...details, confirmPassword: e.target.value})}
                    />
                  </div>
                  <div className="field">
                    <button
                      type="submit"
                      className="btn"
                      disabled = {loading}
                    >
                      <p className="txt"> Sign in</p>
                    </button>
                  </div>
                </form>
                <div className="w-100 text-center mt-2">
                  Already have an account? <Link to="/">Log In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
