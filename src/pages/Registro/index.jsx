import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyIcon from "@mui/icons-material/Key";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn0 } from "components";
import { createUser } from "services"; // Importa tu servicio de creación de usuario
import Alert from "@mui/material/Alert"; // Importa el componente de alerta

export const Registro = () => {
  const navigate = useNavigate();
  const [nombreUser, setNombreUser] = useState("");
  const [telUser, setTelUser] = useState("");
  const [usuarioUser, setUsuarioUser] = useState("");
  const [contrasenaUser, setContrasenaUser] = useState("");
  const [contrasenaConfirmation, setContrasenaConfirmation] = useState("");
  const [permiso, setPermiso] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validateNumbers = (value) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  };

  const handleRegister = async () => {
    if (permiso !== "9808") {
      setError("Permiso denegado");
      setTimeout(() => {
        setError(null); // Navega a la página de inicio después de un registro exitoso
      }, 2000);
      return;
    }
    if (
      !nombreUser ||
      !telUser ||
      !usuarioUser ||
      !contrasenaConfirmation ||
      !contrasenaUser
    ) {
      setError("Todos los campos son obligatorios.");
      setTimeout(() => {
        setError(null); // Navega a la página de inicio después de un registro exitoso
      }, 2000);
      return;
    }

    if (contrasenaUser !== contrasenaConfirmation) {
      setError("Las contraseñas no coinciden");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }

    if (!validateNumbers(telUser)) {
      setError("Introduzca sólo números en teléfono.");
      setTimeout(() => {
        setError(null); // Navega a la página de inicio después de un registro exitoso
      }, 2000);
      return;
    }

    try {
      const newUser = {
        nombre_user: nombreUser,
        tel_user: telUser,
        usuario_user: usuarioUser,
        contrasena_user: contrasenaUser,
        id_rol: 2, // Asigna el rol adecuado, este valor es solo un ejemplo
      };
      await createUser(newUser);
      setSuccess(true);
      setTimeout(() => {
        navigate("/home"); // Navega a la página de inicio después de un registro exitoso
      }, 2000); // Espera 2 segundos antes de redirigir
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Ocurrió un error durante el registro. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100 mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="title">Registro de Usuario</h1>
        </div>
        <div className="d-block justify-content-center mt-5">
          {error && (
            <Alert severity="error" className="mb-3">
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" className="mb-3">
              Registro exitoso. Redirigiendo a la página de inicio...
            </Alert>
          )}

          <div className="d-flex justify-content-center mt-3">
            <TextField
              color="secondary"
              label="Nombre"
              value={nombreUser}
              onChange={(e) => setNombreUser(e.target.value)}
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
              color="secondary"
              label="Teléfono"
              type="tel"
              inputProps={{ maxLength: 10 }}
              value={telUser}
              onChange={(e) => setTelUser(e.target.value)}
              maxLength={10}
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <TextField
              color="secondary"
              label="Usuario"
              value={usuarioUser}
              onChange={(e) => setUsuarioUser(e.target.value)}
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
              value={contrasenaUser}
              onChange={(e) => setContrasenaUser(e.target.value)}
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
            <TextField
              type="password"
              color="secondary"
              label="Confirma la contraseña"
              value={contrasenaConfirmation}
              onChange={(e) => setContrasenaConfirmation(e.target.value)}
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
            <TextField
              type="password"
              color="secondary"
              label="Permiso"
              value={permiso}
              onChange={(e) => setPermiso(e.target.value)}
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
            <Btn0 title="Registrar" onClick={handleRegister} />
          </div>
        </div>
      </div>
      <Btn0
        title="Cancelar"
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        onClick={() => navigate("home")}
      />
    </div>
  );
};
