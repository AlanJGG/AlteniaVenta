import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { myConsole } from "@/utils/objects";

export const Inventario = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // myConsole.log("Hola");
  };

  useEffect(() => {
    // myConsole.log("Hola")
  }, []);

  return (
    <div>
      <div>Inventario</div>
      <button className="btn-accion" onClick={() => navigate("/main-page")}>
        Atrás
      </button>
    </div>
  );
};
