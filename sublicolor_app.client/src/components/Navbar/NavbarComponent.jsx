import React from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";
import Logo from "../../assets/icono.png";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  // Contenido inicial (Logo)
  const start = (
    <div className="navbar-start">
      <img src={Logo} alt="SubliColor-Logo" className="home-logo-navbar" />
      <span className="font-bold text-white ml-2">Sublimaciones a color</span>
    </div>
  );

  // Contenido final (Avatar y nombre)
  const end = (
    <div className="navbar-end">
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
      <span className="font-bold text-white ml-2">Amy Elsner</span>
    </div>
  );

  return (
    <div className="navbar-wrapper">
      <Menubar
        start={start}
        end={end}
        style={{
          backgroundColor: "#2196f3",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
      {/* Contenido central como capa independiente */}
      <div className="navbar-center">
        <button className="p-link navbar-icon">
          <i className="pi pi-home text-2xl"></i>
        </button>
        <button className="p-link navbar-icon">
          <i className="pi pi-user text-2xl"></i>
        </button>
        <button className="p-link navbar-icon">
          <i className="pi pi-search text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default NavbarComponent;
