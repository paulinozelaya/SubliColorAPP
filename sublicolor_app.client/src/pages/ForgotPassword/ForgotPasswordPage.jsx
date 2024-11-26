import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Logo from "../../assets/icono.png";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordPage.css";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    code: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleValidation = () => {
    const newErrors = {};

    if (step === 1 && !formData.username.trim()) {
      newErrors.username = "Por favor ingresa tu usuario o correo.";
    } else if (step === 2) {
      if (!formData.code.trim()) {
        newErrors.code = "Por favor ingresa el código de verificación.";
      } else if (formData.code !== "123456") {
        newErrors.code = "El código proporcionado es incorrecto.";
        toast.current.show({
          severity: "warn",
          summary: "Código Incorrecto",
          detail: "El código proporcionado es incorrecto, favor validar.",
        });
      }
    } else if (step === 3) {
      if (!formData.password.trim()) {
        newErrors.password = "Por favor ingresa la nueva contraseña.";
      }
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Por favor confirma la nueva contraseña.";
      }
      if (
        formData.password.trim() &&
        formData.confirmPassword.trim() &&
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword = "Las contraseñas no coinciden.";
        toast.current.show({
          severity: "warn",
          summary: "Contraseñas Diferentes",
          detail: "Favor verificar que las contraseñas coincidan.",
        });
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!handleValidation()) return;

    if (step === 1) {
      toast.current.show({
        severity: "success",
        summary: "Código enviado",
        detail: "Se envió un código de verificación a tu correo.",
      });
      setStep(2);
    } else if (step === 2) {
      toast.current.show({
        severity: "success",
        summary: "Código validado",
        detail: "Código de verificación correcto.",
      });
      setStep(3);
    } else if (step === 3) {
      toast.current.show({
        severity: "success",
        summary: "Contraseña actualizada",
        detail: "Tu contraseña se actualizó correctamente.",
      });
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  const stepsConfig = {
    1: {
      field: "username",
      label: "Usuario o Correo",
    },
    2: {
      field: "code",
      label: "Código de Verificación",
    },
    3: [
      { field: "password", label: "Nueva Contraseña", type: "password" },
      {
        field: "confirmPassword",
        label: "Confirmar Contraseña",
        type: "password",
      },
    ],
  };

  const renderFields = () => {
    if (step === 3) {
      return stepsConfig[3].map(({ field, label, type = "text" }) => (
        <div className="p-field" key={field}>
          <span className="p-float-label">
            <InputText
              id={field}
              type={type}
              value={formData[field]}
              onChange={handleChange(field)}
              className={`input-field ${errors[field] ? "p-invalid" : ""}`}
              aria-describedby={`${field}-help`}
              invalid={!!errors[field]}
            />
            <label htmlFor={field}>{label}</label>
          </span>
          {errors[field] && (
            <small id={`${field}-help`} className="p-error error-text">
              {errors[field]}
            </small>
          )}
        </div>
      ));
    }

    const { field, label } = stepsConfig[step];
    return (
      <div className="p-field">
        <span className="p-float-label">
          <InputText
            id={field}
            value={formData[field]}
            onChange={handleChange(field)}
            className={`input-field ${errors[field] ? "p-invalid" : ""}`}
            aria-describedby={`${field}-help`}
            invalid={!!errors[field]}
          />
          <label htmlFor={field}>{label}</label>
        </span>
        {errors[field] && (
          <small id={`${field}-help`} className="p-error error-text">
            {errors[field]}
          </small>
        )}
      </div>
    );
  };

  return (
    <div className="recovery-container">
      <Toast ref={toast} />
      <div className="recovery-form">
        <img src={Logo} alt="SubliColor-Logo" className="login-logo" />
        <div className="title-container">
          <h2 className="login-title">SubliColor</h2>
          <h4 className="subheading">Sublimaciones a Color</h4>
          <h4 className="subheading">Recuperación de contraseña</h4>
        </div>
        <form onSubmit={handleSubmit}>
          {renderFields()}
          <Button
            type="submit"
            label={step === 3 ? "Guardar" : "Siguiente"}
            className="login-btn"
          />
        </form>
        <div className="forgot-password-container">
          <a href="/login" className="forgot-password-link">
            ¿Tienes una cuenta? Iniciar Sesión
          </a>
        </div>
      </div>
    </div>
  );
}
