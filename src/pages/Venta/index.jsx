import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { myConsole } from "@/utils/objects";

export const Venta = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    // myConsole.log("Hola");
  };

  useEffect(() => {
    // myConsole.log("Hola")
  }, []);

  return (
    <div>
      <div>Venta</div>
      <button className="btn-accion" onClick={() => navigate("/main-page")}>
        Atrás
      </button>
    </div>
  );
};
