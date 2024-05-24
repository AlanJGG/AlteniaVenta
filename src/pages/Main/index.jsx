import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { myConsole } from "@/utils/objects";

export const Main = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // myConsole.log("Hola");
  };

  useEffect(() => {
    // myConsole.log("Hola")
  }, []);

  return (
    <div>
      <div className="subtitle p-3">Bienvenido: [User]</div>
      <div className="d-flex justify-content-center">
        <div className="btn-container">
          <button className="btn-accion" onClick={() => navigate("/venta")}>
            Venta
          </button>
          <button className="btn-accion" onClick={() => navigate("/gastos")}>
            Gastos
          </button>
          <button className="btn-accion" onClick={() => navigate("/corte")}>
            Corte
          </button>
        </div>
      </div>
    </div>
  );
};
