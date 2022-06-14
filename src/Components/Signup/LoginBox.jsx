import React, { useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Box.css";
import TextField from "@mui/material/TextField";
export const LoginBox = () => {
  const [details,setDetails] = useState({
    email: "",
    password: "",
  })
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      console.log(details.email,details.password)
      const res = await login(details.email,details.password);
      console.log(res);
      navigate("/search");
    } catch(error) {
      console.log(error);
      setError("Failed to Signin");
    }
    setLoading(false);
  }

  return (
    <div className="main_con">
      <div className="h-full py-16 px-4">
        <div className="bg-grey-lighter min-h-screen flex flex-col con1">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 con2">
            <h3 className="text-3xl font-extrabold leading-6 my-5 text-black head-text">
            Movielib
            </h3>
            <div className="space-x-2">
              <h1 className="mb-8 text-3xl text-center head">Log in</h1>
            </div>
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md con3">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2 border-gray-300 con4">
                {error && <Alert variant="danger">{error}</Alert>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="field">
                    <label
                      for="mail"
                      className="block text-sm font-medium text-gray-700"
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
                      className="block text-sm font-medium text-gray-700"
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
                    <button
                      type="submit"
                      className="btn"
                      disabled = {loading}
                    >
                      <p className="txt">Log In</p>
                    </button>
                  </div>
                </form>
                <div className="w-100 text-center mt-2">
                  want to have an account? <Link to="/Signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
