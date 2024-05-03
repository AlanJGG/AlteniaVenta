import { useState, useEffect } from "react";
// import { myConsole } from "@/utils/objects";

export const Main = () => {
  const handleSubmit = () => {
    // myConsole.log("Hola");
  };

  useEffect(() => {
    // myConsole.log("Hola")
  }, []);

  return (
   <div className="d-flex justify-content-center">
      <div className="btn-container">
        <button className="btn-accion">Venta</button>
        <button className="btn-accion">Gastos</button>
        <button className="btn-accion">Corte</button>
      </div>
   </div>
  );
};
