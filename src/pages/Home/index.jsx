import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

import { Btn1 } from "components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Btn0 } from "components";

// import { myConsole } from "@/utils/objects";

export const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Hey");
    navigate("/main-page");
  };

  useEffect(() => {
    // myConsole.log("Hola")
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="title">AlteniaVenta</h1>
        </div>
        <div className="d-block justify-content-center mt-5">
          <h2 className="subtitle">Ingresa con tu usuario y contraseña</h2>

          <div className="d-flex justify-content-center mt-3">
            <TextField
              color="secondary"
              label="Usuario"
              // error
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
              label="Contraseña"
              // error
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
    </div>
  );
};
