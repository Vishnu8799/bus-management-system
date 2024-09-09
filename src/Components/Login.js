import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Row } from "reactstrap";
import InputFeild from "./Input/Input";
import { saveData } from '../Utils/Storage';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "Admin" && password === "Admin") { // Simple authentication check
      saveData('isLoggedIn', true);
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };




  return (
    <div className="login_screen_container">
      <Row>
        <div className="login_greeting_con">
          <div>Welcome back!</div>
          <div className="greet_info">please login to your account</div>
        </div>
        <div className="login_inputs_con">
          <form onSubmit={'handleSubmit'}>
            <div className="login_eye_con_fixed">
              <InputFeild
                label={"Username"}
                classNameInLabel="hr_login_password_field_label login_password"
                PiEyeSlash
                name="username"
                width={"100%"}
                keyname={"username"}
                value={username}
                onChange={(e, value) => setUsername(value)}
                placeholder={"Username"}
                onKeyPress={true}
              />
            </div>
            <div className="login_eye_con_fixed">
              <InputFeild
                label={"Password"}
                classNameInLabel="hr_login_password_field_label login_password"
                PiEyeSlash
                type="password"
                name="Password"
                width={"100%"}
                keyname={"password"}
                value={password}
                onChange={(e, value) => setPassword(value)}
                placeholder={"Password"}
                onKeyPress={true}
              />
            </div>
            <div>
              {error && <p style={{ color: "red", fontSize: "12" }}>{error}</p>}
            </div>
            <div className="login_button" onClick={handleLogin}>
              Login
            </div>
          </form>
        </div>
      </Row>
    </div>
  );
}

export default Login;
