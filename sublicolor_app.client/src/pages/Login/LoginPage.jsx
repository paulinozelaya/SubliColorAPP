import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import "./LoginPage.css";
import Logo from "../../assets/icono.png";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username == "admin" && password == "1234") {
      login();
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} alt="SubliColor-Logo" className="login-logo" />
        <div className="title-container">
          <h2 className="login-title">SubliColor</h2>
          <h4 className="subheading">Sublimaciones a Color</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-field">
            <span className="p-float-label">
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
              />
              <label htmlFor="username">Usuario</label>
            </span>
          </div>
          <div className="p-field">
            <span className="p-float-label">
              <InputText
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <label htmlFor="password">Contraseña</label>
            </span>
          </div>
          <div className="p-field-checkbox">
            <Checkbox
              inputId="remember"
              checked={remember}
              onChange={(e) => setRemember(e.checked)}
            />
            <label htmlFor="remember" className="p-ml-2">
              Recordar Usuario
            </label>
          </div>
          <Button type="submit" label="Iniciar Sesión" className="login-btn" />
        </form>
        <div className="forgot-password-container">
          <a href="/recuperarContrasena" className="forgot-password-link">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}
