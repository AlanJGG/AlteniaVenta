import { useState, useEffect } from "react";
import { Btn1 } from "components";
// import { myConsole } from "@/utils/objects";

export const Main = () => {
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
          <Btn1 title="Venta" route="/venta"/>
          <Btn1 title="Gastos" route="/gastos"/>
          <Btn1 title="Corte" route="/corte"/>
        </div>
      </div>
    </div>
  );
};
