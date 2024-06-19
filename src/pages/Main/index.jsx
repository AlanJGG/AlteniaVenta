import { useState, useEffect } from "react";
import { Btn1 } from "components";
import { Header2 } from "components";
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
      <Header2 />
      <div className="d-flex justify-content-center">
        <div className="btn-container">
          <Btn1 title="Venta" route="/venta" />
          <Btn1 title="Inventario" route="/inventario" />
          <Btn1 title="Corte" route="/corte" />
        </div>
      </div>
    </div>
  );
};
