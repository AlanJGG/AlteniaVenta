import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Btn0 } from "components";
import Alert from "@mui/material/Alert";
import { authenticateUser } from "services";
import { AuthContext } from "context/AuthContext";

export const Home = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);

  // const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (!user || !contrasena) {
      setError("Por favor, complete ambos campos.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    try {
      const credentials = {
        usuario_user: user,
        contrasena_user: contrasena,
      };

      const response = await authenticateUser(credentials);
      console.log(response.user);

      if (response.success) {
        login(response.user);
        navigate("main-page"); // Navega a la página principal
      } else {
        setError(
          response.message || "Nombre de usuario o contraseña incorrectos."
        );
        setTimeout(() => setError(null), 3000);
      }
    } catch (error) {
      console.error("Error durante la autenticación:", error);
      setError(
        "Ocurrió un error al intentar iniciar sesión. Inténtelo nuevamente."
      );
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="title">AlteniaVenta</h1>
        </div>
        <div className="d-block justify-content-center mt-5">
          <h2 className="subtitle">Ingresa con tu usuario y contraseña</h2>

          {error && (
            <div className="d-flex justify-content-center mt-3">
              <Alert severity="error">{error}</Alert>
            </div>
          )}

          <div className="d-flex justify-content-center mt-3">
            <TextField
              color="secondary"
              label="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <TextField
              type="password"
              color="secondary"
              label="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Btn0 title="Ingresar" onClick={handleSubmit} />
          </div>
        </div>
      </div>
      <Btn0
        title="Registrar"
        onClick={() => navigate("registro")}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      />
    </div>
  );
};
