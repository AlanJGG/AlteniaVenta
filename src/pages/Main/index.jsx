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
    <>
      <div>
        <h1 className="title">AlteniaVenta</h1>
      </div>
      <div className="card">
        <h2 className="subtitle">Ingresa con tu wow</h2>
        <form action="">
          <div className="input_row">
            <input className="input-text" type="text" placeholder="Usuario" />
          </div>
          <div className="input_row">
            <input
              className="input-text"
              type="text"
              placeholder="Contraseña"
            />
          </div>
          <div className="input_row">
            <button
              className="btn"
              onClick={() => console.log("Ingresar activado")}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
