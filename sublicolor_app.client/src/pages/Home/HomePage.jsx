import { useAuth } from "../../context/AuthContext";

function HomePage() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            <h1>Bienvenido a la Página Principal</h1>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}

export default HomePage;
