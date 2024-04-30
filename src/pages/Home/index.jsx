
import { Btn1 } from "components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { myConsole } from "@/utils/objects";

export const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
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
          <form action="">
            <div className="d-flex justify-content-center mt-2">
              <input className="input-text" type="text" placeholder="Usuario" />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <input
                className="input-text"
                type="text"
                placeholder="Contraseña"
              />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Btn1 title="Ingresar" variant="outlined" onClick={handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
