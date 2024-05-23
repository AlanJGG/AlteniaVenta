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
    <div className="d-flex justify-content-center">
      <div className="btn-container">
        <button className="btn-accion" onClick={() => navigate("/.")}>
          Venta
        </button>
        <button className="btn-accion">Gastos</button>
        <button className="btn-accion">Corte</button>
      </div>
    </div>
  );
};
