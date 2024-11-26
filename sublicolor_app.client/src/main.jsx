import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// PrimeReact core styles
import "primereact/resources/themes/saga-blue/theme.css"; // Cambia el tema según prefieras
import "primereact/resources/primereact.min.css";         // Estilos básicos de PrimeReact
import "primeicons/primeicons.css";                      // Iconos de PrimeIcons
import "primeflex/primeflex.css";                        // Utilidades de diseño (opcional)


createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>    
        <App />
    </BrowserRouter>
  </>
);
