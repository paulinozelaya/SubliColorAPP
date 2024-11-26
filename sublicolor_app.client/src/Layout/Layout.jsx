import React from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Navbar fijo en la parte superior */}
      <header className="layout-navbar">
        <NavbarComponent />
      </header>

      {/* Sidebar fijo en la izquierda */}
      <SidebarComponent />

      {/* Contenido principal al lado derecho */}
      <div className="layout-main">
        <div className="main-content-container">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{
          
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}>
        <p>&copy; {new Date().getFullYear()} SubliColor. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;